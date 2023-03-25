import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsExports from 'src/aws-exports';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'capstone-project';
  authenticator!: AuthenticatorService;
  constructor(private authService: AuthService) {
    this.authenticator = this.authService.AmplifyAuth;
  }
}
