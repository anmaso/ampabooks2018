import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { BookingComponent } from './booking/booking';
import { IonicPage, IonicModule, NavController, NavParams, LoadingController } from 'ionic-angular';
@NgModule({
	declarations: [MenuComponent, BookingComponent],
	imports: [IonicModule ],
	exports: [MenuComponent, BookingComponent]
})
export class ComponentsModule {}
