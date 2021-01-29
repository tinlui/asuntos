import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-minutario',
  templateUrl: './listado-minutario.component.html',
  styleUrls: ['./listado-minutario.component.css']
})
export class ListadoMinutarioComponent implements OnInit {

  constructor() { }

  @Input()
  minutarios;
  
displayColumns: String[] = ["consecutivo","opciones","fecha","asunto","dirigido","solicita"]
  columnas: [
    {titulo: "Consecutivo" , name: "consecutivo"},
    {titulo: "Opciones" , name: "opciones"},
    {titulo: "Asunto" , name: "asunto"},
    {titulo: "Dirigido" , name: "dirigido"},
    {titulo: "Fecha" , name: "fecha"},
    {titulo: "Solicita" , name: "solicita"},    
  ]
  ngOnInit():void{  
      }
}
