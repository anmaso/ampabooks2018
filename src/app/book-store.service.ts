import { Injectable } from '@angular/core';
import { Book } from './book';
import { Jsonp } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookStoreService {

    GET_BOOKS_URL = 'https://wt-7974bf26aea1e45a705bc8d98047e57c-0.run.webtask.io/ampa-get-books';
    POST_BOOKING_URL = 'https://wt-7974bf26aea1e45a705bc8d98047e57c-0.run.webtask.io/ampa-db';
    GET_BOOKING_URL = 'https://wt-7974bf26aea1e45a705bc8d98047e57c-0.run.webtask.io/ampa-db/booking/get';
    GET_BOOKINGS_URL = 'https://wt-7974bf26aea1e45a705bc8d98047e57c-0.run.webtask.io/ampa-db/ampa/bookings/get';
    JSONP_CALLBACK = 'callback=JSONP_CALLBACK';
    BOOKS: Book[];

    constructor(private jsonp: Jsonp, private http: HttpClient) {
        var count = 1;
    }

    getBooks(): Promise<any> {
        return this.jsonp.request(this.GET_BOOKS_URL+'?'+this.JSONP_CALLBACK,{params:{dc:Math.random()}}).toPromise()
            .then(res=>  res.text())
            .then(text=>{
                //return this.BOOKS=text.split('#').map((line,idx)=>new Book(idx+1, ...line.split(',')))
                return this.BOOKS=text.split('#').map((line,idx)=>{
                    var b = line.split(',');
                    return new Book(idx+1, b[0], parseInt(b[1], 10), b[2], b[3], b[4], b[5], parseInt(b[6], 10));
                });
            })
            .catch(e=>console.error(e))
    }

    query(phone:string, code:string) {
        return this.http.get(`${this.GET_BOOKING_URL}/${phone}/${code}`);
    }
    public queryAll(phone:string, code:string) {
        return this.http.get(`${this.GET_BOOKINGS_URL}/${phone}/${code}`);
    }

    save({code, name,  mother, father, motherphone, fatherphone, email, books}){
        var data={
            code,
            name,
            father,
            mother,
            motherphone,
            fatherphone,
            email,
            books,
            date: new Date()
        };
        return this.http.post(`${this.POST_BOOKING_URL}/save/${code}/${email}`, data);
    }

}
