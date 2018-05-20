import { Input, Component } from '@angular/core';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'booking',
  templateUrl: 'booking.html'
})
export class BookingComponent {

  @Input() booking;

  ngOnInit() {
    console.log("bookin=", this.booking);
    var total = this.booking.books.reduce( (acc, b)=> acc+(b.price*b.count), 0);
    this.booking.total = total;
  }

}
