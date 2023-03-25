export interface Flight {
  flightId: string;
  airlineName: string;
  airlineLogo: string;
  departureTime: Date;
  arrivalTime: Date;
  origin: string;
  destination: string;
  flightPrice: number;
}
