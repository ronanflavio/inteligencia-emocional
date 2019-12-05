import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Pergunta } from '../models/pergunta.js';
import { Resposta } from '../models/resposta.js';
import { PERGUNTAS } from '../data/perguntas';
import { RESPOSTAS } from '../data/respostas';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor() { }

  perguntas() : Observable<Pergunta[]> {
    return of(PERGUNTAS);
  }

  respostas() : Observable<Resposta[]> {
    return of(RESPOSTAS);
  }
}
