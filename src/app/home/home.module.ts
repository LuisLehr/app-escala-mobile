import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HamburguerMenuComponent} from "../components/hamburguer-menu/hamburguer-menu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    HamburguerMenuComponent
  ],
  declarations: [HomePage, HamburguerMenuComponent]
})
export class HomePageModule {}
