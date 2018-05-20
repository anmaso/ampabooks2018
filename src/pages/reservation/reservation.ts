import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Book } from '../../app/book';
import { BookStoreService } from '../../app/book-store.service';
import { QueryBookingPage } from '../query-booking/query-booking';
import { AlertController } from 'ionic-angular';


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

  public name: string = '';
  public father: string = '';
  public fatherphone: string = '';
  public fatherdni: string = '';
  public mother: string = '';
  public motherdni: string = '';
  public motherphone: string = '';
  public email: string = '';
  public booking: any;

  constructor(public navCtrl: NavController,
    public bookStore: BookStoreService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
    this.books = navParams.data.books.filter(b => b.count);
    this.booking = navParams.data.booking;
    if (this.booking){
      this.name=this.booking.name;
      this.father=this.booking.father;
      this.fatherphone=this.booking.fatherphone;
      this.fatherdni=this.booking.fatherdni;
      this.mother=this.booking.mother;
      this.motherphone=this.booking.motherphone;
      this.motherdni=this.booking.motherdni;
    }

  }

  showAlert() {
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create({
        title: 'Reserva realizada correctamente',
        subTitle: 'Podrás consultar tu reserva con el número de teléfono y dni de uno de los padres',
        buttons: [{
          text: 'OK',
          handler: data => {
            resolve(data)

          }
        }]
      });
      alert.present();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  mailText(booking){
    var lines = [
      'Datos de la reserva',
      '-------------------',
      'Podrás revisar los datos en la aplicación con el código y el teléfono de uno de los padres',
      'Alumno: '+booking.name
    ];
    lines = lines.concat(booking.books.map(b=>
      `${b.course} : ${b.count} x ${b.name}`
    ));

    return lines.join('\n');
  }
  
  mailSubject(booking){
    return `Reserva de libros ${booking.code} para ${booking.name}`
  }

  book() {

    let loading = this.loadingCtrl.create({ content: 'Buscando...' });
    loading.present(loading); //nav instance of NavController
    var booking:any;
    booking = {
      name: this.name,
      father: this.father,
      mother: this.mother,
      fatherdni: this.fatherdni,
      motherdni: this.motherdni,
      fatherphone: this.fatherphone,
      motherphone: this.motherphone,
      email: this.email,
      books: this.books
    }
    var _id = (this.booking && this.booking._id)|| '';
    this.bookStore.save(_id, booking).subscribe(data => {
      loading.dismiss();
      if (booking.email){
        this.bookStore.mail(booking.email, this.mailSubject(booking), this.mailText(booking));
      }
      this.showAlert().then(() => {
        this.navCtrl.push(QueryBookingPage, {
          booking: booking,
          received: data
        });
      })
    })
  }
}
