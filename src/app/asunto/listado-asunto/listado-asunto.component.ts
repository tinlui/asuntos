import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { EditarAsuntoComponent } from '../editar-asunto/editar-asunto.component';

@Component({
  selector: 'app-listado-asunto',
  templateUrl: './listado-asunto.component.html',
  styleUrls: ['./listado-asunto.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ListadoAsuntoComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input()
  asuntos;

  editarDialog(id: number) {
    this.dialog.open(EditarAsuntoComponent, { data: { id } });
  }
  expandedElement: String[] = [
    'fOficio',
    'fRecibido',
    'nombreDirigido',
    'puestoDirigido',
    'dependiciaDirigido',
    'nombreEnviado',
    'puestoEnviado',
    'dependenciaEnviado',
    'noDespacho',
    'segDespacho',
    'estDespacho',
  ];
  displayColumns: String[] = [
    'noOficio',
    'opciones',
    'archivar',
    'pdf',
    'cargaArchivo',
    'nombreDirigido',
    'nombreEnviado',
    'detalle',
  ];
  ngOnInit(): void {}
}
