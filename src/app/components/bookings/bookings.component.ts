import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService, passenger } from 'src/app/API.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  tickets: any;
  constructor(private api: APIService, private auth: AuthService) {
    this.api
      .ListPassengers({
        userId: { eq: this.auth.AmplifyAuth.user.attributes!['sub'] },
      })
      .then((res) => {
        this.tickets = res.items;
      });
  }
  updateTicket = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  cancelTicket(ticket: passenger) {
    this.api.DeletePassenger({ id: ticket.id }).then((res) => {
      this.tickets = this.tickets.filter((t: passenger) => t.id !== ticket.id);
    });
  }
}
