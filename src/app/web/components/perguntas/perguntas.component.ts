import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pergunta } from '../../models/pergunta';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  @Input() perguntas: Pergunta[];

  @Input() respostas: string[];

  @Output() enviarResultado = new EventEmitter();

  perguntaAtual: number = 1;

  resultado: any = [];

  constructor() { }

  ngOnInit() {
  }

  responder(resposta: number, pergunta: Pergunta) {
    this.resultado[pergunta.id] = {
      pergunta: pergunta,
      resposta: resposta
    };
  }

  voltar() {
    if (this.perguntaAtual > 1) {
      this.perguntaAtual--;
    }
  }

  continuar() {
    this.perguntaAtual++;
  }

  concluir() {
    this.enviarResultado.emit(this.resultado);
  }

}
