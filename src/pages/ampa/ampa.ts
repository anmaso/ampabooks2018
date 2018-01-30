import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public bookings = [
    {
      id: 123,
      name : 'Aroa Marín Orts',
      visible:true
    },
    {
      id:232,
      name : 'Hernán Marín Orts',
      visible:true
    },
    {
      id:332,
      name : 'Marujita Díaz',
      visible:true
    },
    {
      id:432,
      name : 'Isabel Pantoja',
      visible:true
    },
    {
      id:532,
      name : 'Lola flores',
      visible:true
    },
    {
      id:632,
      name : 'Rocío Durcal',
      visible:true
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmpaPage');
  }

  filterChange(filterText: string){
    this.bookings.forEach(b=>b.visible=(''+b.id+b.name).toLowerCase().indexOf(filterText.toLowerCase())>=0)
  }

}
