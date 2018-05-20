import { Component } from '@angular/core';
import { BookStoreService } from '../../app/book-store.service';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


/**
 * Generated class for the AmpaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ampa',
  templateUrl: 'ampa.html'
})
export class AmpaPage {

  public bookings = [];

  public booking  ;
  public phone: string = '';
  public code: string = '';

  public msg:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public bookStore: BookStoreService,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmpaPage');
  }

  bookingContains(booking: any, text:string){
    return (''+
      booking.name + '#'+
      booking.father +  '#'+
      booking.mother +  '#'+
      booking.fatherdni +  '#'+
      booking.motherdni +  '#'+
      booking.fatherphone +  '#'+
      booking.motherphone).toLowerCase().indexOf(text.toLowerCase())>=0;
  }

  filterChange(filterText: string){
    this.bookings.forEach(b=>b.visible=this.bookingContains(b,filterText));
  }
 query() {
    console.log(this.query);
    let loading = this.loadingCtrl.create({ content: 'Buscando...' });
    loading.present(loading); //nav instance of NavController

    this.bookStore.queryAll(this.phone, this.code)
      .subscribe((data: any) => {
        loading.dismiss();
        if (data.error) {
          this.bookings = [];
          this.msg=data.msg;
        } else {
          this.msg='';
          this.bookings = data.map(function(booking){ booking.visible=true; return booking; });
        }
        console.log("data received", data);
      })
  }

  export(){
    window.open('https://wt-7974bf26aea1e45a705bc8d98047e57c-0.sandbox.auth0-extend.com/ampa-db/ampa/bookings/csv/'+this.phone+'/'+this.code, 'libros.csv');
  }

  selectBooking(booking){
    this.booking=booking;
  }

  closeBooking(){
    this.booking=null;
  }


}
