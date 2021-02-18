import { Component,  OnInit , Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CapturaMinutarioComponent } from '../utilidades/captura-minutario/captura-minutario.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  consulta = false;
  btnConsultar=true;
  btnCerrar=false;

  constructor(public dialog: MatDialog) {
   
   }
   openDialog() {
    this.dialog.open(CapturaMinutarioComponent);
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
  consultaAsunto() {
    this.consulta = true;
    this.btnCerrar=true;
    this.btnConsultar=false;
  }
  botonesConsulta(){
    this.consulta = false;
    this.btnConsultar=true;
  this.btnCerrar=false;
  }
}
