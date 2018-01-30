import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../app/book';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  books: Book[] = [];

  reservationNumber: string = (Math.random()*1000+'').substr(0,3);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.books = navParams.data.books.filter( b => b.count);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

}
