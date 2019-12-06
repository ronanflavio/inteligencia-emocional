import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent implements OnInit {

  @Output() salvarNome = new EventEmitter();

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  getErroNome() {
    let erro = this.form.get('nome').hasError('required') ? 'Este campo é obrigatório' : null;
    erro = erro ? erro : (this.form.get('nome').hasError('minlength') ? 'Digite pelo menos 3 caracteres.' : null);
    erro = erro ? erro : (this.form.get('nome').hasError('maxlength') ? 'Digite no máximo 50 caracteres.' : null);
    return erro;
  }

  salvar() {
    this.salvarNome.emit({
      nome: this.form.value['nome']
    });
  }

}
