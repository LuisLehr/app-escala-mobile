export interface Professor {
  id: number; // ou 'professor_id', dependendo do que você definiu
  nome: string;
  disciplinas: any[]; // ou o tipo correto, se você souber
  horario?: any; // se for opcional
  segunda?: any; // e assim por diante para outros dias
  terca?: any;
  quarta?: any;
  quinta?: any;
  sexta?: any;
}