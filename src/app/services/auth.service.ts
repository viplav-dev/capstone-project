import { Injectable } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsExports from 'src/aws-exports';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AmplifyAuth!: AuthenticatorService;
  constructor(private authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
    this.AmplifyAuth = authenticator;
  }
  isLoggedIn() {
    this.AmplifyAuth;
    if (this.AmplifyAuth.authStatus === 'authenticated') {
      console.log('User is logged in');
      return true;
    } else {
      return false;
    }
  }
}
