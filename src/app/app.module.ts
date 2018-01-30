import { NgModule, ErrorHandler } from '@angular/core';
import { JsonpModule, Jsonp } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AmpaPage } from '../pages/ampa/ampa';
import { TabsPage } from '../pages/tabs/tabs';
import { ReservationPage } from '../pages/reservation/reservation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BookStoreService } from './book-store.service';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AmpaPage,
    TabsPage,
    ReservationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    JsonpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AmpaPage,
    TabsPage,
    ReservationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BookStoreService
  ]
})
export class AppModule {}
