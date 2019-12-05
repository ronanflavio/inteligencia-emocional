import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pergunta } from '../../models/pergunta';
import { Resposta } from '../../models/resposta';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  @Input() perguntas: Pergunta[];

  @Input() respostas: Resposta[];

  @Output() enviarResultado = new EventEmitter();

  resultado: any = [];

  constructor() { }

  ngOnInit() {
  }

  responder(resposta: Resposta, pergunta: Pergunta) {
    this.resultado[pergunta.id] = {
      pergunta: pergunta,
      resposta: resposta
    };
  }

  concluir() {
    this.enviarResultado.emit(this.resultado);
  }

}
