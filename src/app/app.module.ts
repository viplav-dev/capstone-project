import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { HeaderPresigninComponent } from './components/common/header-presignin/header-presignin.component';
import { HeaderPostsigninComponent } from './components/common/header-postsignin/header-postsignin.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { BookTicketsComponent } from './components/book-tickets/book-tickets.component';
import { ShowFlightsComponent } from './components/show-flights/show-flights.component';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    HeaderPresigninComponent,
    HeaderPostsigninComponent,
    FooterComponent,
    BookingsComponent,
    BookTicketsComponent,
    ShowFlightsComponent,
    SearchFlightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
