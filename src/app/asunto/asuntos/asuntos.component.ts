import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CrearAsuntoComponent } from '../crear-asunto/crear-asunto.component';

@Component({
  selector: 'app-asuntos',
  templateUrl: './asuntos.component.html',
  styleUrls: ['./asuntos.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AsuntosComponent implements OnInit {
  consulta = false;
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CrearAsuntoComponent);
  }

  //Boton para mostrar el panel de consulta
  consultaAsunto() {
    this.consulta = true;
  }

  filtroListado(event) {
    if (event){
      this.asuntos=event
    }else{
      this.asuntos
    }
   // this.asuntos=event
  }
  ngOnInit(): void {
    this.asuntos = [
      {
        no_identificacion: 33043,
        no_docto_original: 'SEFIN/050/2021',
        fecha_recepcion:new Date('2021-02-10') ,
        fecha_documento: new Date('2021-02-09'),
        dirigido_a: 'GERARDO BERLANGA GOTES',
        enviado_por: 'MARTÍN VALDÉS RODRÍGUEZ',
        asunto:
          'EN RELACION AL PROYECTO DENOMINADO "BRT CORRERDOR...',
        observaciones: '',
        original: 1,
        copia: 0,
       no_oficio_turnar:null,
       fecha_tunrnar:null,
       turnado_a:null,
        firmado_por:null,
        instruccion:null,
        contestado:null,
        fecha_revision:null,
        fecha_contestacion:null,
        concluido:null,
        titular:null,
        ccp:null,
        archivado_en:null,
        archivo_digital: '33O43.pdf',
        idAdministracion:null
      },
      {
        no_identificacion: 33044,
        no_docto_original: 'CEAS-DG-DD/0042/2021',
        fecha_recepcion:new Date('2021-02-10') ,
        fecha_documento: new Date('2021-02-10'),
        dirigido_a: 'RAUL RODRIGUEZ',
        enviado_por: 'MARTÍN VALDÉS RODRÍGUEZ',
        asunto:
          'INFORMA QUE SE LLEVARA A CABO LA SESION EXTRARORIDNARIA...',
        observaciones: '',
        original: 1,
        copia: 0,
       no_oficio_turnar:62,
       fecha_turnar:new Date('2021-02-10'),
       turnado_a:3131,
        firmado_por:3389,
        instruccion:'FAVOR DE COORDINARSE CON EL ING. ALEJANDRO JUAN AN...',
        contestado:0,
        fecha_revision:new Date('2021-02-10'),
        fecha_contestacion:new Date('2021-02-10'),
        concluido:null,
        titular:null,
        ccp:null,
        archivado_en:null,
        archivo_digital: '3304.pdf',
        idAdministracion:2017
      },
    ];
  }

  asuntos;
}
