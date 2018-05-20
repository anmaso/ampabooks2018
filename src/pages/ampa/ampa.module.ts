import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpaPage } from './ampa';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AmpaPage,
  ],
  imports: [
    IonicPageModule.forChild(AmpaPage),
    ComponentsModule
  ],
  exports: [AmpaPage]
})
export class AmpaPageModule {}
