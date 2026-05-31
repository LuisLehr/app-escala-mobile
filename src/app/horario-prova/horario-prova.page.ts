import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para fazer a requisição HTTP
import { AlertController } from '@ionic/angular'; // Para mostrar alertas

@Component({
  selector: 'app-horario-prova',
  templateUrl: './horario-prova.page.html',
  styleUrls: ['./horario-prova.page.scss'],
})
export class HorarioProvaPage {
  turma: string = '';
  dia: string = '';
  periodo: string = '';
  horarios: any[] = [];
  professor: string = ''; // Para armazenar o professor sorteado
  registros: any[] = []; // Array para armazenar os registros

  constructor(private http: HttpClient, private alertController: AlertController) {}

  registrarHorario() {
    // Convertendo o período selecionado em um array de horários
    let horariosSelecionados: number[] = [];

    if (this.periodo === '1º ao 3º') {
      horariosSelecionados = [1, 2, 3];
    } else if (this.periodo === '1º ao 5º') {
      horariosSelecionados = [1, 2, 4, 5];
    }

    // Montar o payload para enviar ao servidor
    const payload = {
      dia: this.dia.toLowerCase(), // Transforma o dia em letras minúsculas
      horarios: horariosSelecionados // Envia os horários como array
    };

    // Faz a requisição POST para o servidor
    this.http.post('http://localhost:3000/atribuir-professor', payload)
      .subscribe(async (response: any) => {
        this.professor = response.professor.nome; // Recebe o nome do professor disponível

        // Armazenar os dados do formulário + o professor sorteado
        const registro = {
          turma: this.turma,
          dia: this.dia,
          periodo: this.periodo,
          professor: this.professor
        };

        this.registros.push(registro); // Adiciona o novo registro ao array

        // Exibe o alerta com o professor sorteado
        const alert = await this.alertController.create({
          header: 'Professor Atribuído',
          message: `O professor disponível é: ${this.professor}`,
          buttons: ['OK']
        });
        await alert.present();

        // Limpa o formulário após a submissão
        this.resetForm();
      }, async (error) => {
        console.error('Erro:', error);
        
        const alert = await this.alertController.create({
          header: 'Erro',
          message: 'Não foi possível encontrar um professor disponível para esse horário.',
          buttons: ['OK']
        });
        await alert.present();
      });
  }

  // Função para resetar o formulário
  resetForm() {
    this.turma = '';
    this.dia = '';
    this.periodo = '';
  }
}
