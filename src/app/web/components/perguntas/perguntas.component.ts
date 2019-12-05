import { Component, OnInit, Input } from '@angular/core';
import { Pergunta } from '../../models/pergunta';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  @Input() perguntas: Pergunta[];

  constructor() { }

  ngOnInit() {
  }

}
