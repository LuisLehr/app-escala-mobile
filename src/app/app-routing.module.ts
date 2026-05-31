import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'horario-prova',
    loadChildren: () => import('./horario-prova/horario-prova.module').then(m => m.HorarioProvaPageModule)
  },
  {
    path: 'professor-escala', // Adicione esta rota
    loadChildren: () => import('./professor-escala/professor-escala.module').then(m => m.ProfessorEscalaModule)
  },
  {
    path: 'grade-semanal', // Adicione esta rota
    loadComponent: () => import('./grade-semanal/grade-semanal.component').then(m => m.GradeSemanalComponent) 
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
