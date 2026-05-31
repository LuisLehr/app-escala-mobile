import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioProvaPage } from './horario-prova.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioProvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioProvaPageRoutingModule {}
