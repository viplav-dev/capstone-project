import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Flight } from '../flight.model';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  flightSelect = new BehaviorSubject<Flight | null>(null);
  constructor() {}
}
