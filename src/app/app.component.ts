import { Component, ViewChild } from '@angular/core';
import { Nav, Menu } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AmpaPage } from '../pages/ampa/ampa';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Menu) menu: Menu;
  rootPage:any = HomePage;
  ampa:any = AmpaPage;

  constructor(
              platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    this.nav.setRoot(page);
    this.menu.close();

  }
}
