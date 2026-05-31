import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ProfessorEscalaComponent } from './professor-escala.component';
import { ProfessorEscalaRoutingModule } from './professor-escala-routing.module'; // Importa o módulo de roteamento
import {HomePageModule} from "../home/home.module"; // Importa o módulo de roteamento

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule, // Certifique-se de importar o HttpClientModule aqui
    ProfessorEscalaRoutingModule,
    HomePageModule
  ],
  declarations: [ProfessorEscalaComponent],
  exports: [ProfessorEscalaComponent]
})
export class ProfessorEscalaModule {}
