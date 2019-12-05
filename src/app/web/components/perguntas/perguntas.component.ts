import { Component, OnInit, Input } from '@angular/core';
import { Pergunta } from '../../models/pergunta';
import { Resposta } from '../../models/resposta';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  @Input() perguntas: Pergunta[];

  @Input() respostas: Resposta[];

  resultado: any = [];

  constructor() { }

  ngOnInit() {
  }

  responder(resposta: number, pergunta: number) {
    this.resultado[pergunta] = resposta;
  }

}
