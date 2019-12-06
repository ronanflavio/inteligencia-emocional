import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './web/pages/inicio/inicio.component';
import { QuestionarioComponent } from './web/pages/questionario/questionario.component';
import { ResultadoComponent } from './web/pages/resultado/resultado.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'questionario', component: QuestionarioComponent },
  { path: 'resultado', component: ResultadoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
