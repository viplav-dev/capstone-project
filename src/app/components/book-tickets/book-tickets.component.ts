import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { Flight } from 'src/app/flight.model';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-book-tickets',
  templateUrl: './book-tickets.component.html',
  styleUrls: ['./book-tickets.component.css'],
})
export class BookTicketsComponent {
  flightSelected: Flight | null = null;

  constructor(
    private componentService: ComponentService,
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
        this.api
          .CreatePassenger({
            firstName: bookTickets.firstName,
            lastName: bookTickets.lastName,
            email: bookTickets.email,
            phone: bookTickets.phone,
            flightId: flight.id,
          })
          .then((ticket) => {
            this.router.navigate(['/booking']);
          });
      });
  }
}
