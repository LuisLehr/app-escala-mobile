import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Professor {
    nome: string;
    horario: number;
    segunda: number;
    terca: number;
    quarta: number;
    quinta: number;
    sexta: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = 'http://localhost:3000/professores'; // URL do seu backend

  constructor(private http: HttpClient) {}

  getProfessores(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
