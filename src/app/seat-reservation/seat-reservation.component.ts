// seat-reservation.component.ts
import { Component } from '@angular/core';
import { Seat } from '../models/seat.model';
import { SeatReservationService } from '../services/seat-reservation.service';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.scss'],
})
export class SeatReservationComponent {
  numSeats: number | null | undefined;
  reservedSeats: Seat[] = [];

  constructor(private seatReservationService: SeatReservationService) {}

  reserveSeats(): void {
    this.reservedSeats = this.numSeats ? this.seatReservationService.reserveSeats(this.numSeats) : [];
    this.numSeats = null;
  }
}
