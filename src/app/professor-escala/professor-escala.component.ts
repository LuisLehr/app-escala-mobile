// professor-escala.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-professor-escala',
  templateUrl: './professor-escala.component.html',
  styleUrls: ['./professor-escala.component.scss'],
})
export class ProfessorEscalaComponent implements OnInit {
  professores: any[] = [];
  professorSelecionado: any = null;  // Atualizado para receber o professor selecionado
  escalaProfessor: any = {};
  diasDaSemana: string[] = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

  constructor(private http: HttpClient, private alertController: AlertController) {}

  ngOnInit() {
    this.carregarProfessores();
  }

  // Método para carregar a lista de professores
  carregarProfessores() {
    this.http.get('http://localhost:3000/professores').subscribe(
      (data: any) => {
        this.professores = data;
      },
      (error) => {
        console.error('Erro ao carregar professores:', error);
        this.mostrarAlertaErro();
      }
    );
  }

// Método chamado quando o professor é selecionado no dropdown
carregarEscala(event: any) {
  const professorId = event.detail.value;  // Agora será o ID numérico do professor
  console.log('Professor ID recebido:', professorId);  // Exibe o ID no console para depuração

  // Define o professor selecionado com base no ID numérico
  this.professorSelecionado = this.professores.find(prof => prof.professor_id === professorId);  // Atualiza o objeto professorSelecionado

  // Carrega a escala do professor selecionado
  if (professorId) {
    this.http.get(`http://localhost:3000/escala/${professorId}`).subscribe(
      (data: any) => {
        this.escalaProfessor = data;  // Armazena a escala recebida no objeto escalaProfessor
        console.log('Escala recebida:', this.escalaProfessor);  // Exibe a escala recebida no console para depuração
      },
      (error) => {
        console.error('Erro ao carregar a escala do professor:', error);  // Exibe erros, se houver
        this.mostrarAlertaErro();  // Mostra um alerta em caso de erro
      }
    );
  }
}    

  // Verifica se a escala está vazia
  escalaVazia() {
    return !this.escalaProfessor || Object.keys(this.escalaProfessor).length === 0;
  }

  // Mostra uma mensagem de erro caso a requisição falhe
  async mostrarAlertaErro() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
