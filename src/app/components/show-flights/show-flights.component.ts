import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/flight.model';
import { ComponentService } from 'src/app/services/component.service';
@Component({
  selector: 'app-show-flights',
  templateUrl: './show-flights.component.html',
  styleUrls: ['./show-flights.component.css'],
})
export class ShowFlightsComponent {
  flightDetails: Flight[] = [];
  constructor(
    private componentService: ComponentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((flightSearch) => {
      if (
        flightSearch['origin'] &&
        flightSearch['destination'] &&
        flightSearch['departureDate'] &&
        flightSearch['noOfPassengers']
      ) {
        this.generateFlightDetails(
          flightSearch['origin'],
          flightSearch['destination'],
          new Date(flightSearch['departureDate'])
        );
      }
    });
  }

  onFlightSelect(flight: Flight) {
    this.router.navigate(['/book-flight'], { queryParams: flight });
  }
  generateFlightDetails(
    origin: string,
    destination: string,
    departureDate: Date
  ) {
    this.flightDetails = [];
    // Generate 10 random flights
    for (let i = 0; i < 10; i++) {
      // Choose a random airline
      const airline =
        this.airlines[Math.floor(Math.random() * this.airlines.length)];

      // Generate a random 3-digit number
      const randomNum = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(4, '0');

      // Generate the flight ID using airline code and random number
      const flightNumber = `${airline.code}-${randomNum}`;

      // Generate random departure and arrival times
      const departureTime = new Date(departureDate);
      departureTime.setHours(Math.floor(Math.random() * 24));
      departureTime.setMinutes(Math.floor(Math.random() * 60));

      const arrivalTime = new Date(departureTime);
      arrivalTime.setHours(
        departureTime.getHours() + Math.floor(Math.random() * 10) + 1
      );
      arrivalTime.setMinutes(Math.floor(Math.random() * 60));

      // Generate random flight price
      const flightPrice = Math.floor(Math.random() * 10000) + 500;

      // Add the flight details to the array
      this.flightDetails.push({
        origin: origin,
        destination: destination,
        flightNumber: flightNumber,
        airlineName: airline.name,
        airlineLogo: airline.logo,
        departureTime: departureTime,
        arrivalTime: arrivalTime,
        flightPrice: flightPrice,
      });
    }
  }

  // Create an array of airline names and logos
  airlines = [
    {
      name: 'Air India',
      code: 'AI',
      logo: 'https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png',
    },
    {
      name: 'IndiGo',
      code: '6E',
      logo: 'https://seekvectorlogo.com/wp-content/uploads/2022/01/indigo-vector-logo-2022-small.png',
    },
    {
      name: 'SpiceJet',
      code: 'SG',
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.png',
    },
    {
      name: 'Vistara',
      code: 'UK',
      logo: 'https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.png',
    },
    {
      name: 'GoAir',
      code: 'G8',
      logo: 'https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/airlines-companies/go-first-airline-logo.png',
    },
  ];
}
