import { Component,  OnInit , Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearComponent } from '../../utilidades/crear/crear.component';


@Component({
  selector: 'app-secretario',
  templateUrl: './secretario.component.html',
  styleUrls: ['./secretario.component.css']
})
export class SecretarioComponent implements OnInit {
  consulta = false;
  btnConsultar=true;
  btnCerrar=false;

  constructor(public dialog: MatDialog) {
   
   }
   openDialog() {
    this.dialog.open(CrearComponent);
  }

  filtroListado(event) {
    console.log(event)
    if (event){
      this.minutarioSecretario=event
    }else{
      this.minutarioSecretario
    }
   // this.asuntos=event
  }

  title = 'recepcion-documentos';
  ngOnInit(): void {
    this.minutarioSecretario = [{
     
      fecha: new Date(),
      consecutivo: 'sein/ds/770/2020',
      dirigido_a: 'Alma Celina Moreira Cañedo',
      asunto: 'Solicitud de pago de servicio por emision de licencias',
      solicita: 'Emilio Ortega Cabada'
    },{
      
      fecha: new Date(),
      consecutivo: 'sein/ds/767/2020',
      dirigido_a: 'Diego A, Cardona Rangel',
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
