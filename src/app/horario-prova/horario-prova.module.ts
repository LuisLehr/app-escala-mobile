import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HorarioProvaPageRoutingModule } from './horario-prova-routing.module';
import { HorarioProvaPage } from './horario-prova.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioProvaPageRoutingModule,
    HomePageModule
  ],
  declarations: [HorarioProvaPage]
})
export class HorarioProvaPageModule {}
//alteracao front feita