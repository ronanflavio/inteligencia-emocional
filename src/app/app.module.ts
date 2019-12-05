import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { InicioComponent } from './web/pages/inicio/inicio.component';
import { PerguntasComponent } from './web/components/perguntas/perguntas.component';
import { BaseComponent } from './arch/components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PerguntasComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
