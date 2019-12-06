import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service';
import { BaseComponent } from 'src/app/arch/components/base/base.component';
import { Pergunta } from '../../models/pergunta';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent extends BaseComponent implements OnInit {

  nome: string;

  perguntas: Pergunta[];

  respostas: string[];

  resultado: any;

  constructor(
    private router: Router,
    private questionarioService: QuestionarioService
  ) {
    super();
  }

  ngOnInit() {
    this.questionarioService.obsNome
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        if (!res) {
          this.router.navigate(['inicio']);
          return false;
        } else {
          this.nome = res
        }
      });

    this.questionarioService.obsResultado
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.resultado = res;
      });

    this.questionarioService.perguntas()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.perguntas = res;
      });

    this.questionarioService.respostas()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.respostas = res;
      });
  }

  enviarResultado(event: any) {
    this.questionarioService.alterarResultado(event);
    this.router.navigate(['resultado']);
  }

}
