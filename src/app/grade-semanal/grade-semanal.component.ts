import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {HomePageModule} from "../home/home.module";
import {NgForOf, SlicePipe} from "@angular/common";
import {Prova} from "../models/prova";

@Component({
  selector: 'app-grade-semanal',
  templateUrl: './grade-semanal.component.html',
  styleUrls: ['./grade-semanal.component.scss'],
  imports: [
    IonicModule,
    HomePageModule,
    NgForOf,
    SlicePipe
  ],
  standalone: true
})
export class GradeSemanalComponent  implements OnInit {

  // Objetos de provas com turma, período e professor
   bar: Prova = { turma:"51", periodo:"1,2",professor:"RODRIGO" };
  bar1: Prova = { turma:"52", periodo:"1,3",professor:"LUIS" };
  bar2: Prova = { turma:"53", periodo:"1,4",professor:"DIEGO" };
  bar3: Prova = { turma:"61", periodo:"1,5",professor:"CACAIO" };
  bar4: Prova = { turma:"62", periodo:"1,6",professor:"JOSÉ" };
  bar5: Prova = { turma:"63", periodo:"1,2, 3",professor:"BRUNO"};
  bar6: Prova = { turma:"71", periodo:"1,2 ,3",professor:"VANDERLEI" };
  bar7: Prova = { turma:"72", periodo:"1, 2, 3, 4",professor:"ANDRÉ" };
  bar8: Prova = { turma:"73", periodo:"1, 5",professor:"RAQUEL" };
  bar9: Prova = { turma:"81", periodo:"1, 6",professor:"VANESSA" };
  bar10: Prova = { turma:"82", periodo:"1, 5",professor:"ADELAR"};
  bar11: Prova = { turma:"83", periodo:"1, 6",professor:"FABIO" };
  bar12: Prova = { turma:"91", periodo:"1, 4",professor:"LAI" };
  bar13: Prova = { turma:"92", periodo:"1, 3",professor:"BERNARDO" };
  bar14: Prova = { turma:"93", periodo:"1, 2",professor:"IGOR" };

  // Array que contém todas as provas
  provas: Prova[] = [this.bar,this.bar1,this.bar2,this.bar3,this.bar4, this.bar5, this.bar6, this.bar7, this.bar8, this.bar9, this.bar10, this.bar11, this.bar12
    ,this.bar13, this.bar14];

  // Dias da semana para uso na tabela
  diasDaSemana: string[] = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

  // Calcula a quantidade de linhas com base no número de provas
  getRows() {
    const colsPerRow = 5; // Quantidade de colunas por linha
    return Math.ceil(this.provas.length / colsPerRow);
  }

  // Retorna as provas de uma linha específica (divididas em grupos de 5)
  getSubjectsForRow(rowIndex: number) {
    const colsPerRow = 5;
    const start = rowIndex * colsPerRow;
    const end = start + colsPerRow;
    return this.provas.slice(start, end);
  }

  constructor() { }

  ngOnInit() {}

}
