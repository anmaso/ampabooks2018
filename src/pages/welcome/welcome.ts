import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AmpaPage } from '../ampa/ampa';
import { QueryBookingPage } from '../query-booking/query-booking';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  gotoReserva() {
    this.navCtrl.push(HomePage)

  }

  gotoViewReserva() {
    this.navCtrl.push(QueryBookingPage)
  }
  gotoAmpa() {
    this.navCtrl.push(AmpaPage)
  }
}
