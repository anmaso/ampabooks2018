import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BookStoreService } from '../../app/book-store.service';
import { BookingComponent } from '../../components/booking/booking';
/**
 * Generated class for the QueryBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-query-booking',
  templateUrl: 'query-booking.html',
})
export class QueryBookingPage {

  phone: string;
  code: string;
  name: string;
  msg: string;

  bookingQuery: any = {
    phone: '',
    code: ''
  }

  public booking: any = {books:[]};
  totalBooks: number;
  total: number;


  constructor(public navCtrl: NavController,
    public bookStore: BookStoreService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
    if (navParams.data && navParams.data.booking) {
      this.bookingQuery.phone = navParams.data.booking.motherphone;
      this.bookingQuery.code = navParams.data.booking.code;
      this.query();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryBookingPage');
    this.calculateTotals(this.booking.books);
  }

  calculateTotals(books) {
    this.totalBooks = books.reduce((acc, b) => acc + b.count, 0);
    this.total = Math.floor(books.reduce((acc, b) => acc + (b.count * b.price * 100) / 100, 0) * 100) / 100;

  }

  query() {
    console.log(this.bookingQuery);
    let loading = this.loadingCtrl.create({ content: 'Buscando...' });
    loading.present(loading); //nav instance of NavController

    this.bookStore.query(this.bookingQuery.phone, this.bookingQuery.code)
      .subscribe((data: any) => {
        loading.dismiss();
        if (data.error) {
          this.booking = [];
          this.totalBooks = 0;
          this.total = 0;
          this.msg=data.msg;
        } else {
          this.booking = data;
          this.totalBooks = data.books.reduce((acc, b) => acc + b.count, 0);
          this.total = Math.floor(data.books.reduce((acc, b) => acc + (b.count * b.price * 100) / 100, 0) * 100) / 100;
        }
        console.log("data received", data);
      })
  }

}
