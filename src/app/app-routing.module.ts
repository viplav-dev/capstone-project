import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookTicketsComponent } from './components/book-tickets/book-tickets.component';

import { BookingsComponent } from './components/bookings/bookings.component';

import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';

const routes: Routes = [
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'bookings', component: BookingsComponent, canActivate: [AuthGuard] },
  {
    path: 'book-flight',
    component: BookTicketsComponent,
    canActivate: [AuthGuard],
  },
  { path: '', component: SearchFlightsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
