import { Component, OnInit } from '@angular/core';
import { ProfessorService } from './services/professor.service'; // Importa o serviço de professores

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private professorService: ProfessorService) {} // Injeta o serviço de professores

  ngOnInit() {
    // Aqui você pode chamar qualquer método do ProfessorService que deseja inicializar ao carregar o app
    this.loadProfessores();
  }

  loadProfessores() {
    this.professorService.getProfessores().subscribe(
      (data) => {
        console.log('Professores carregados:', data);
      },
      (error) => {
        console.error('Erro ao carregar professores:', error);
      }
    );
  }
}
