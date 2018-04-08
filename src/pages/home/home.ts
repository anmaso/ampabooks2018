import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../app/book';
import { Course } from '../../app/course';
import { BookStoreService } from '../../app/book-store.service';
import { ReservationPage } from '../reservation/reservation';
import { AmpaPage } from '../ampa/ampa';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  books: Book[];
  selected: Set<Book> = new Set();
  courses: Course[] = Course.getCourses();
  selectedCourse: string;
  searchText: string = "";
  total: number = 0;
  totalBooks: number = 0;
  //reservationPage:any = ReservationPage;
  reservationPage:any = AmpaPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public bookStore: BookStoreService,
              public actionSheetCtrl: ActionSheetController) {
    this.bookStore.getBooks().then((books) => {
      this.books = books;
    });

  }

  ngOnInit() {
  }

  reservation(){
    this.navCtrl.push(ReservationPage, {
      books: this.books,
      total: this.total
    });
  }

  onSelectCourse(){
    console.log(this.selectedCourse);
    this.books.forEach((b)=>b.visible=b.course==this.selectedCourse)
  }

  selectBook(book){
    book.count= book.count? 0 : 1;
    this.calculateTotal();
  }

  clearBook(book){
    book.count=0;
    this.calculateTotal();
  }


  clearSelection(){
    this.books.forEach( (b)=>b.count=0);
    this.calculateTotal();
  }

  calculateTotal (){
    this.totalBooks = this.books.reduce((acc,b)=> acc+b.count, 0);
    this.total=Math.floor(this.books.reduce((acc,b)=> acc+(b.count*b.price*100)/100, 0)*100)/100;
  }

  selectQuantity(book){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Selecciona cantidad',
      buttons: [
        {
          text: '1',
          handler: () => {
            book.count=1;
            this.calculateTotal();

          }
        }, {
          text: '2',
          handler: () => {
            book.count=2;
            this.calculateTotal();
          }
        }, {
          text: '3',
          handler: () => {
            book.count=3;
            this.calculateTotal();
          }
        }, {
          text: '4',
          handler: () => {
            book.count=4;
            this.calculateTotal();
          }
        }

      ]
    });
    actionSheet.present();
  }
}
