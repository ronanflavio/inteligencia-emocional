import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service';
import { BaseComponent } from 'src/app/arch/components/base/base.component';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent extends BaseComponent implements OnInit {

  nome: string;

  constructor(
    private questionarioService: QuestionarioService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.questionarioService.obsNome
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.nome = res);
  }

  salvarNome(event: any) {
    this.questionarioService.alterarNome(event.nome);
    this.router.navigate(['questionario']);
  }

}
