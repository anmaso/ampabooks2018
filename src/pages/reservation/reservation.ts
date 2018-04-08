import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { Book } from '../../app/book';
import { BookStoreService } from '../../app/book-store.service';
import { QueryBookingPage } from '../query-booking/query-booking';

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

  public name:string= 'Aroa';
  public father:string= 'Angel Marín';
  public mother:string= 'Eva Orts';
  public motherphone:string= '617758298';
  public fatherphone:string= '691867940';
  public email:string= 'eva@ggg.com';

  reservationNumber: string = (Math.random()+'').substr(3,3);
  constructor(public navCtrl: NavController, 
              public bookStore: BookStoreService,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {
    this.books = navParams.data.books.filter( b => b.count);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  book(){

    let loading = this.loadingCtrl.create({ content: 'Buscando...' });
    loading.present(loading); //nav instance of NavController
    var booking = {
      code:this.reservationNumber, 
      name: this.name, 
      father:this.father,
      mother:this.mother,
      fatherphone: this.fatherphone, 
      motherphone: this.motherphone, 
      email:this.email, 
      books:this.books
    }
    this.bookStore.save(booking).subscribe(data=>{
      loading.dismiss();
      this.navCtrl.push(QueryBookingPage, {
        booking: booking,
        received: data
      });
    })
  }

}
