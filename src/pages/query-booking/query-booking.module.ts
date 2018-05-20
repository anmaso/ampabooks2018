import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueryBookingPage } from './query-booking';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    QueryBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(QueryBookingPage),
    ComponentsModule,
  ],
})
export class QueryBookingPageModule {}
