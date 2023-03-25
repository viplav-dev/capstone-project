import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-postsignin',
  templateUrl: './header-postsignin.component.html',
  styleUrls: ['./header-postsignin.component.css'],
})
export class HeaderPostsigninComponent {
  amplifyAuth!: AuthenticatorService;
  constructor(private auth: AuthService) {
    this.amplifyAuth = auth.AmplifyAuth;
  }
}
