import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'],
})
export class SearchFlightsComponent {
  bookTickets = new FormGroup({
    flightId: new FormControl('', Validators.required),
    // passengerName: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    departureDate: new FormControl('', Validators.required),
  });
}
