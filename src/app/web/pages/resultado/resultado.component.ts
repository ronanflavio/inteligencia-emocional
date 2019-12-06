import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service';
import { BaseComponent } from 'src/app/arch/components/base/base.component';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent extends BaseComponent implements OnInit {

  nome: string;

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
        this.nome = res;

        this.questionarioService.obsResultado
          .pipe(takeUntil(this.destroy$))
          .subscribe(res => {
            this.resultado = res;

            if (!this.nome || !this.resultado) {
              this.router.navigate(['inicio']);
            }
          });
      });
  }

}
