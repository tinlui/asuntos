import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listado-particular',
  templateUrl: './listado-particular.component.html',
  styleUrls: ['./listado-particular.component.css']
})
export class ListadoParticularComponent implements OnInit {

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
  ngOnInit(): void {
  
  }
 
}
