import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder) {}

  openDialog() {
    this.dialog.open(CrearAsuntoComponent);
  }

  //Boton para mostrar el panel de consulta
  consultaAsunto() {
    this.consulta = true;
  }

  ngOnInit(): void {
    this.asuntos = [
      {
        id: 0,
        noOficio: 's/n fiscalia gral. del estado',
        archivar: 'asunto',
        cargaArchivo: 'archivo',
        pdf: 'link de pdf',
        fRecibido: new Date(),
        fOficio: new Date(),
        tituloDirigido: 'ing',
        nombreDirigido: 'Gerardo Alberto Berlanga Gotes',
        puestoDirigido:
          'Secretario de infraestructura, desarrollo urbano y movilidad',
        dependiciaDirigido:
          'Secretaria de infraestructura, desarrollo urbano y movilidad',
        tituloEnviado: 'Lic',
        nombreEnviado: 'Monica del carmen flores almaraz',
        puestoEnviado:
          'Agente del ministerio publico de la fiscalia de investigaciones especializadas, atencion',
        dependenciaEnviado: 'Fiscalia general del estado',
        noDespacho: null,
        segDespacho: null,
        estDespacho: null,
        archivadaEn: 'sin archivar',
      },
      {
        id: 1,
        noOficio: 'sidum/caoc/002/2021',
        archivar: 'asunto',
        cargaArchivo: 'archivo',
        pdf: 'link de pdf',
        fRecibido: new Date(),
        fOficio: new Date(),
        dirigido: 'ing',
        nombre: 'Alejandro Juan Antonio Prieto Garcia',
        puesto: 'SubSecretario de infraestructura de obra publica',
        dependicia:
          'Secretaria de infraestructura, desarrollo urbano y movilidad',
        enviadoTitulo: 'Lic',
        nombreEnviado: 'Ivan Murua Beltran Enriquez',
        puestoEnviado: 'Coordinador de Atencion a organos de control',
        dependenciaEnviado:
          'Secretaria de infraestructura, desarrollo urbano y movilidad',
        noDespacho: null,
        segDespacho: null,
        estDespacho: null,
        archivadaEn: 'sin archivar',
      },
    ];
  }

  asuntos;
}
