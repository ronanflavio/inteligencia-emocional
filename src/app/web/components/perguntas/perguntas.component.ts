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

  form = this.fb.group({
    respostas: [[], []]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
