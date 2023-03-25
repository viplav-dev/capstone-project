import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent {
  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.AmplifyAuth.authStatus == 'authenticated') {
      this.router.navigate(['/']);
    }
  }
}
