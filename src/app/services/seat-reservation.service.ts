// seat-reservation.service.ts
import { Injectable } from '@angular/core';
import { Seat } from '../models/seat.model';

@Injectable({
  providedIn: 'root',
})
export class SeatReservationService {
  private coachSeats: Seat[] = [];

  constructor() {
    // Initialize the coachSeats array with 80 seats
    for (let i = 1; i <= 80; i++) {
      const rowNumber = Math.ceil(i / 7);
      const seat: Seat = {
        seatNumber: i,
        rowNumber: rowNumber,
        bookingStatus: false,
      };
      this.coachSeats.push(seat);
    }

    // Mark some seats as already booked 0 based indexing
    this.coachSeats[4].bookingStatus = true;
    this.coachSeats[12].bookingStatus = true;
    // Add more pre-booked seats if needed
  }

  getAvailableSeats(): Seat[] {
    return this.coachSeats.filter((seat) => !seat.bookingStatus);
  }

  getAllSeats(): Seat[] {
    return this.coachSeats
  }

  reserveSeats(numSeats: number): Seat[] {
    const availableSeats = this.getAvailableSeats();
    const reservedSeats: Seat[] = [];

    if (numSeats <= availableSeats.length) {
      for (let i = 0; i < numSeats; i++) {
        const seat = availableSeats[i];
        seat.bookingStatus = true;
        reservedSeats.push(seat);
      }
    }

    return reservedSeats;
  }
}
