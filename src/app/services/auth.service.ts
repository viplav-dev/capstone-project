import { Injectable } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsExports from 'src/aws-exports';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AmplifyAuth!: AuthenticatorService;
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
    this.AmplifyAuth = authenticator;
  }
  isLoggedIn() {
    if (this.AmplifyAuth.authStatus === 'authenticated') {
      return true;
    } else {
      return false;
    }
  }
}
