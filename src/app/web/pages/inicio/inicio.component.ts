import { Component, OnInit } from '@angular/core';
import { Pergunta } from '../../models/pergunta';
import { QuestionarioService } from '../../services/questionario.service';
import { BaseComponent } from 'src/app/arch/components/base/base.component';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent extends BaseComponent implements OnInit {

  perguntas: Pergunta[];

  constructor(
    private questionarioService: QuestionarioService
  ) {
    super();
  }

  ngOnInit() {
    this.questionarioService.listar()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.perguntas = res;
      });
  }

}
