import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryBookingPage } from './query-booking';
import { BookingComponent } from '../../components/booking/booking';

@NgModule({
  declarations: [
    QueryBookingPage,
    BookingComponent
  ],
  imports: [
    IonicPageModule.forChild(QueryBookingPage),
  ],
})
export class QueryBookingPageModule {}
