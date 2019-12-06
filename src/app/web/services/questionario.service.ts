import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { Pergunta } from '../models/pergunta.js';
import { PERGUNTAS } from '../data/perguntas';
import { RESPOSTAS } from '../data/respostas';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  private nome = new BehaviorSubject<string>(null);

  private resultado = new BehaviorSubject<any>(null);

  obsNome = this.nome.asObservable();

  obsResultado = this.resultado.asObservable();

  constructor() { }

  alterarNome(nome: string) {
    this.nome.next(nome);
  }

  alterarResultado(resultado: any) {
    this.resultado.next(resultado);
  }

  perguntas() : Observable<Pergunta[]> {
    return of(PERGUNTAS);
  }

  respostas() : Observable<string[]> {
    return of(RESPOSTAS);
  }
}
