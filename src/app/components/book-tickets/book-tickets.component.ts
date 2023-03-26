import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { Flight } from 'src/app/flight.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css'],
})
export class BookTicketsComponent {
  flightSelected: Flight | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private api: APIService
  ) {
    console.log(new Date().toISOString());
    this.activatedRoute.queryParams.subscribe((flight) => {
      if (!flight) {
        this.router.navigate(['/']);
      }
      this.flightSelected = flight as Flight;
    });
  }
  bookTickets = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  onBookTickets(bookTickets: any) {
    console.log(this.flightSelected);
    this.api
      .CreateFlight({
        flightNumber: this.flightSelected!.flightNumber,
        airlineName: this.flightSelected!.airlineName,
        airlineLogo: this.flightSelected!.airlineLogo,
        arrivalTime: new Date(this.flightSelected!.arrivalTime).toISOString(),
        departureTime: new Date(
          this.flightSelected!.departureTime
        ).toISOString(),
        origin: this.flightSelected!.origin,
        destination: this.flightSelected!.destination,
        flightPrice: this.flightSelected!.flightPrice,
      })
      .then((flight) => {
        console.log(flight);
        console.log(this.auth.AmplifyAuth.user.attributes!['sub']);
        this.api
          .CreatePassenger({
            firstName: bookTickets.firstName,
            lastName: bookTickets.lastName,
            email: bookTickets.email,
            phone: bookTickets.phone,
            flightId: flight.id,
            userId: this.auth.AmplifyAuth.user.attributes!['sub'],
          })
          .then((ticket) => {
            this.router.navigate(['/bookings']);
          });
      });
  }
}
