import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { InicioComponent } from './web/pages/inicio/inicio.component';
import { PerguntasComponent } from './web/components/perguntas/perguntas.component';
import { BaseComponent } from './arch/components/base/base.component';
import { GraficoResultadoComponent } from './web/components/grafico-resultado/grafico-resultado.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PerguntasComponent,
    BaseComponent,
    GraficoResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
