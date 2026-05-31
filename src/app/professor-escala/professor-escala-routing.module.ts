import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorEscalaComponent } from './professor-escala.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessorEscalaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorEscalaRoutingModule {}
