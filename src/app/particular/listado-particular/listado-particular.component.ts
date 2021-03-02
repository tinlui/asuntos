import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from 'src/app/utilidades/editar/editar.component';

@Component({
  selector: 'app-listado-particular',
  templateUrl: './listado-particular.component.html',
  styleUrls: ['./listado-particular.component.css']
})
export class ListadoParticularComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input()
  minutarios;
  
  editarDialog(id: number) {
    this.dialog.open(EditarComponent, { data: { id } });
  }

  displayColumns: String[] = ["consecutivo","opciones","fecha","asunto","dirigido","solicita"]
  columnas: [
    {titulo: "Consecutivo" , name: "consecutivo"},
    {titulo: "Opciones" , name: "opciones"},
    {titulo: "Asunto" , name: "asunto"},
    {titulo: "Dirigido" , name: "dirigido"},
    {titulo: "Fecha" , name: "fecha"},
    {titulo: "Solicita" , name: "solicita"},    
  ]
  ngOnInit(): void {
  
  }
 
}
