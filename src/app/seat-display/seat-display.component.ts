// seat-display.component.ts
import { Component, OnInit } from '@angular/core';
import { Seat } from '../models/seat.model';
import { SeatReservationService } from '../services/seat-reservation.service';

@Component({
  selector: 'app-seat-display',
  templateUrl: './seat-display.component.html',
  styleUrls: ['./seat-display.component.scss'],
})
export class SeatDisplayComponent implements OnInit {
  seats: Seat[] = [];

  constructor(private seatReservationService: SeatReservationService) {
  }

  ngOnInit() {
    this.seats = this.seatReservationService.getAllSeats()
    console.log(this.seats)
  }
}
