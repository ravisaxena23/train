// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';
import { SeatDisplayComponent } from './seat-display/seat-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/reservation', pathMatch: 'full' },
  { path: 'reservation', component: SeatReservationComponent },
  { path: 'display', component: SeatDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
