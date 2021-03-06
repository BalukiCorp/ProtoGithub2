import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular-lite';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaPage } from './busqueda';

@NgModule({
  declarations: [
    BusquedaPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(BusquedaPage),
  ],
})
export class BusquedaPageModule {}
