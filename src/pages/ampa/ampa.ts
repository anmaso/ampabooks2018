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
  templateUrl: 'ampa.html',
})
export class AmpaPage {

  public bookings = [];

  public booking  ;
  public phone: string = '619867940';
  public code: string = '123';

  public msg:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public bookStore: BookStoreService,
    public loadingCtrl: LoadingController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmpaPage');
  }

  filterChange(filterText: string){
    this.bookings.forEach(b=>b.visible=(''+b.code+b.name).toLowerCase().indexOf(filterText.toLowerCase())>=0)
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

  selectBooking(booking){
    this.booking=booking;
  }

  closeBooking(){
    this.booking=null;
  }


}
