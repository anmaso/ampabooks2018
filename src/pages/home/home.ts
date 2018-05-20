import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../app/book';
import { Course } from '../../app/course';
import { BookStoreService } from '../../app/book-store.service';
import { ReservationPage } from '../reservation/reservation';
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
  booking: any;
  //reservationPage:any = ReservationPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public bookStore: BookStoreService,
              public actionSheetCtrl: ActionSheetController) {
    var data = this.navParams.data ;
    this.bookStore.getBooks().then((books) => {
      this.books = books;
      if (data&& data.booking){
        this.booking=data.booking;
        this.selectedCourse=data.booking.books[0].course;

        var byISBN=this.navParams.data.booking.books.reduce((acc,b)=>{
          acc[b.ISBN]=b.count;
          return acc;
        }, {});
        this.books.forEach(b=>{
          if (byISBN[b.ISBN]){
            b.visible=true;
            b.count=byISBN[b.ISBN];
          }
        });
      }
      this.calculateTotal();
    });


  }

  ngOnInit() {
  }

  reservation(){
    this.navCtrl.push(ReservationPage, {
      books: this.books,
      totalBooks: this.totalBooks,
      total: this.total,
      booking: this.booking
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

  selectAll(){
    (this.books||[]).forEach((b)=> { if (b.visible) b.count=1});
    this.calculateTotal();
  }
}
