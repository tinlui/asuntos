import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'

import {MaterialModule} from './material/material.module';
import { ListadoMinutarioComponent } from './minutario/listado-minutario/listado-minutario.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoAsuntoComponent } from './asunto/listado-asunto/listado-asunto.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AsuntosComponent } from './asunto/asuntos/asuntos.component';
import { ListadoParticularComponent } from './particular/listado-particular/listado-particular.component';
import { ParticularComponent } from './particular/particular/particular.component';
import { CapturaComponent } from './utilidades/captura/captura.component';
import { CrearAsuntoComponent } from './asunto/crear-asunto/crear-asunto.component';
import { EditarAsuntoComponent } from './asunto/editar-asunto/editar-asunto.component';
import { ConsultarAsuntoComponent } from './asunto/consultar-asunto/consultar-asunto.component';
import { ConsultarComponent } from './utilidades/consultar/consultar.component';
import { CrearComponent } from './utilidades/crear/crear.component';
import { CapturaMinutarioComponent } from './utilidades/captura-minutario/captura-minutario.component'

@NgModule({
  declarations: [
    AppComponent,
    ListadoMinutarioComponent,
    ListadoGenericoComponent,
    MenuComponent,
    ListadoAsuntoComponent,
    LandingPageComponent,
    AsuntosComponent,
    ListadoParticularComponent,
    ParticularComponent,
    CapturaComponent,
    CrearAsuntoComponent,
    EditarAsuntoComponent,
    ConsultarAsuntoComponent,
    ConsultarComponent,
    CrearComponent,
    CapturaMinutarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
