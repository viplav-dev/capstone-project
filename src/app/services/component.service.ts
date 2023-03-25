import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from '../flight.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  // flight: Flight = {
  //   origin: 'DUBAI',
  //   destination: 'DELHI',
  //   flightNumber: 'AI-0412',
  //   airlineName: 'Air India',
  //   airlineLogo:
  //     'https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.png',
  //   departureTime: new Date('2002-02-19T19:18:00.000Z'),
  //   arrivalTime: new Date('2002-02-20T02:55:00.000Z'),
  //   flightPrice: 1398,
  // };
  // flightSearch$ = new BehaviorSubject<FlightSearch | null>(null);
  // flightSelected$ = new BehaviorSubject<Flight | null>(this.flight);
  constructor() {}
}

export interface FlightSearch {
  noOfPassengers: number;
  origin: string;
  destination: string;
  departureDate: string;
}
