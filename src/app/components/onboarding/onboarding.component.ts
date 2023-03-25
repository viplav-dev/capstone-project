import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (this.auth.AmplifyAuth.authStatus == 'authenticated') {
      this.activatedRoute.queryParams.subscribe((params) => {
        if (params['returnUrl']) {
          this.router.navigateByUrl(params['returnUrl']);
        } else {
          this.router.navigate(['/']);
        }
      });
    }
  }
}
