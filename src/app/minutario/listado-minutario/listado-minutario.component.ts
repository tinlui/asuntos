import { Component, Input,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from 'src/app/utilidades/editar/editar.component';

@Component({
  selector: 'app-listado-minutario',
  templateUrl: './listado-minutario.component.html',
  styleUrls: ['./listado-minutario.component.css']
})
export class ListadoMinutarioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input()
  minutarios;
  
  editarDialog(id: number) {
    this.dialog.open(EditarComponent, { data: { id } });
  }

displayColumns: String[] = ["consecutivo","opciones","fecha","asunto","dirigido_a","solicita"]
  columnas: [
    {titulo: "Consecutivo" , name: "consecutivo"},
    {titulo: "Opciones" , name: "opciones"},
    {titulo: "Asunto" , name: "asunto"},
    {titulo: "Dirigido" , name: "dirigido_a"},
    {titulo: "Fecha" , name: "fecha"},
    {titulo: "Solicita" , name: "solicita"},    
  ]
  ngOnInit():void{  
      }
}
