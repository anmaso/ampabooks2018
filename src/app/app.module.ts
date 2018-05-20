import * as Raven from 'raven-js';

import { NgModule, ErrorHandler } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AmpaPage } from '../pages/ampa/ampa';
import { WelcomePage } from '../pages/welcome/welcome';
import { ReservationPage } from '../pages/reservation/reservation';
import { QueryBookingPage } from '../pages/query-booking/query-booking';
import { BookingPage } from '../pages/booking/booking';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BookStoreService } from './book-store.service';
import { HttpClientModule } from '@angular/common/http';
import { AmpaPageModule } from '../pages/ampa/ampa.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { ReservationPageModule  } from '../pages/reservation/reservation.module';
import { QueryBookingPageModule  } from '../pages/query-booking/query-booking.module';
import { BookingPageModule  } from '../pages/booking/booking.module';

Raven
  .config('https://eda35a7100434602adb06a281cd6b6bc@sentry.io/1183707')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    Raven.captureException(err);
  }
}

export class SentryErrorHandler extends IonicErrorHandler {

  handleError(error) {
      super.handleError(error);

      try {
        Raven.captureException(error.originalError || error);
      }
      catch(e) {
        console.error(e);
      }
  }
}


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JsonpModule,
    HttpClientModule,
    AmpaPageModule,
    WelcomePageModule,
    ReservationPageModule,
    QueryBookingPageModule,
    BookingPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AmpaPage,
    WelcomePage,
    TabsPage,
    ReservationPage,
    QueryBookingPage,
    BookingPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ErrorHandler, useClass: SentryErrorHandler},
    BookStoreService
  ]
})
export class AppModule {}
