import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Pergunta } from '../models/pergunta.js';
import { PERGUNTAS } from '../data/perguntas';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor() { }

  listar() : Observable<Pergunta[]> {
    return of(PERGUNTAS);
  }
}
