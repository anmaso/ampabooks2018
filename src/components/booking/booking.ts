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

  constructor() {
  }

}
