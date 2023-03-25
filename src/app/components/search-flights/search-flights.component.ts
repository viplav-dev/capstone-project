import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'],
})
export class SearchFlightsComponent {
  constructor(
    private componentService: ComponentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params) {
        this.searchFlights.patchValue(params);
      }
    });
  }

  searchFlights = new FormGroup({
    noOfPassengers: new FormControl(1, Validators.required),
    // passengerName: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    departureDate: new FormControl('', Validators.required),
  });
  onSearchFlight(searchFlights: any) {
    this.router.navigate(['/'], { queryParams: searchFlights });
  }
}
