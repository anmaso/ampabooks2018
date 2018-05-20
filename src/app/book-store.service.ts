import { Injectable } from '@angular/core';
import { Book } from './book';
import { Jsonp } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()
export class BookStoreService {
    BASE = 'https://wt-7974bf26aea1e45a705bc8d98047e57c-0.sandbox.auth0-extend.com/ampa-db';

    GET_BOOKS_URL = 'https://wt-7974bf26aea1e45a705bc8d98047e57c-0.sandbox.auth0-extend.com/ampa-get-books';
    POST_BOOKING_URL = this.BASE;
    GET_BOOKING_URL = this.BASE+'/booking/get';
    GET_BOOKINGS_URL = this.BASE+'/ampa/bookings/get';
    JSONP_CALLBACK = 'callback=JSONP_CALLBACK';
    MAIL_URL = 'https://wt-7974bf26aea1e45a705bc8d98047e57c-0.run.webtask.io/ampa-mail';
    BOOKS: Book[];

    constructor(private jsonp: Jsonp, private http: HttpClient) {
    }

    getBooks(): Promise<any> {
        return this.jsonp.request(this.GET_BOOKS_URL+'?'+this.JSONP_CALLBACK,{params:{dc:Math.random()}}).toPromise()
            .then(res=>  res.text())
            .then(text=>{
                //return this.BOOKS=text.split('#').map((line,idx)=>new Book(idx+1, ...line.split(',')))
                var books = this.BOOKS=text.split('#').map((line,idx)=>{
                    var b = line.split(',');
                    return new Book(idx+1, b[0], parseInt(b[1], 10), b[2], b[3], b[4], b[5], parseInt(b[6], 10));
                });
                console.log(books);
                return books;
            })
            .catch(e=>console.error(e))
    }

    query(phone:string, code:string) {
        return this.http.get(`${this.GET_BOOKING_URL}/${phone}/${code}`);
    }
    public queryAll(phone:string, code:string) {
        return this.http.get(`${this.GET_BOOKINGS_URL}/${phone}/${code}`);
    }

    save(_id, { name,  mother, father, motherphone, fatherphone, email, books, motherdni, fatherdni}){
        var data:any={
            name,
            father,
            mother,
            motherphone,
            fatherphone,
            fatherdni,
            motherdni,
            email,
            books,
            date: new Date()
        };
        if (_id){
            data._id=_id;
        }
        return this.http.post(`${this.POST_BOOKING_URL}/save`, data);
    }

    delete(_id){
        return this.http.delete(`${this.POST_BOOKING_URL}/booking/${_id}`);
    }

    mail(to, subject, text){
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
        this.http.post(`${this.MAIL_URL}`,{
            to,
            text,
            subject
        }, httpOptions)
    }

}
