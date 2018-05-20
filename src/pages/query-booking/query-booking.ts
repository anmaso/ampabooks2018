import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BookStoreService } from '../../app/book-store.service';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

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
  name: string;
  msg: string;
  error: string='';

  bookingQuery: any = {
    phone: '',
    dni: '',
  }

  public booking: any = {books:[]};
  public bookings: any = [{books:[]}]
  totalBooks: number;
  total: number;


  constructor(public navCtrl: NavController,
    public bookStore: BookStoreService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private alertCtrl: AlertController) {
    if (navParams.data && navParams.data.booking) {
      this.bookingQuery.phone = navParams.data.booking.motherphone || navParams.data.booking.fatherphone;
      this.bookingQuery.dni = navParams.data.booking.motherdni || navParams.data.booking.fatherdni;
      this.query();
    }
  }

  reset() {
    this.booking = {books:[]};
    this.bookings = [{books:[]}];
    this.total=0;
    this.totalBooks=0;
    this.error='';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryBookingPage');
    this.calculateTotals(this.booking.books);
  }

  calculateTotals(books) {
    this.totalBooks = books.reduce((acc, b) => acc + b.count, 0);
    this.total = Math.floor(books.reduce((acc, b) => acc + (b.count * b.price * 100) / 100, 0) * 100) / 100;

  }

  edit(){
    this.navCtrl.push(HomePage, {
      booking: this.booking
    })
  }

  query() {
    this.reset();
    console.log(this.bookingQuery);
    let loading = this.loadingCtrl.create({ content: 'Buscando...' });
    loading.present(loading); //nav instance of NavController

    this.bookStore.query(this.bookingQuery.phone, this.bookingQuery.dni)
      .subscribe((data: any) => {
        loading.dismiss();
        console.log("data received", data);
        if (data.error) {
          this.booking = [];
          this.bookings = [];
          this.totalBooks = 0;
          this.total = 0;
          this.msg=data.msg;
        } else {
          this.bookings = data;
          data.forEach(b=>{
            b.totalBooks=b.books.reduce((acc, b) => acc + b.count, 0);
            b.total = Math.floor(b.books.reduce((acc, b) => acc + (b.count * b.price * 100) / 100, 0) * 100) / 100;
          })
          if (this.bookings.length==1){
            this.booking = data[0];
            this.totalBooks = this.booking.totalBooks;
            this.total = this.booking.total;
          }
        }
      }, error => {
        loading.dismiss();
        this.error=error;
      })
  }

  selectBooking(booking){
    this.booking = booking;
    this.totalBooks = this.booking.totalBooks;
    this.total = this.booking.total;
  }

  delete(){
    let _id = this.booking._id;
    let alert = this.alertCtrl.create({
      title: 'Confirmación de borrado',
      message: '¿Seguro que quiere borrar esta reserva?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sí, borrar',
          handler: () => {
            let loading = this.loadingCtrl.create({ content: 'Borrando...' });
            loading.present(loading); //nav instance of NavController
            this.bookStore.delete(_id).subscribe(data=>{
              loading.dismiss();
              this.query();
            });
          }
        }
      ]
    });
    alert.present();

  }

}
