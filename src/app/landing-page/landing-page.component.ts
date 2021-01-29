import { Component,  OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor() {
   
   }
  
  title = 'recepcion-documentos';
  ngOnInit(): void {
    this.minutarioSecretario = [{
     
      fecha: new Date(),
      consecutivo: 'sein/ds/770/2020',
      dirigido: 'Nestor de jesus vasquez chavez',
      asunto: 'Solicitud de pago de servicio por emision de licencias',
      solicita: 'Emilio Ortega Cabada'
    },{
      
      fecha: new Date(),
      consecutivo: 'sein/ds/767/2020',
      dirigido: 'Javier Alain Herrera Arroyo',
      asunto: 'Comprobacion de Fondo Revolvente Segunda Quincena de Octubre',
      solicita: 'Emilio Ortega Cabada' 
    }]
  }
  minutarioSecretario;
}
