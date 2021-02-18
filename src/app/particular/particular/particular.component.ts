import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CapturaMinutarioComponent } from 'src/app/utilidades/captura-minutario/captura-minutario.component';


@Component({
  selector: 'app-particular',
  templateUrl: './particular.component.html',
  styleUrls: ['./particular.component.css']
})
export class ParticularComponent implements OnInit {
  consulta = false;
  btnConsultar=true;
  btnCerrar=false;
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CapturaMinutarioComponent);
  }
  ngOnInit(): void {
    this.minutarioSecretarioParticular= [{
      opciones: 'modificar/eliminar',
      fecha: new Date(),
      consecutivo: 'sein/ds/sp/225/2020',
      dirigido: 'Alma Celina Moreira Cañedo',
      asunto: 'OFICIO DE COMISIÓN PARA EL 08 AL 10 DE DICIEMBRE 2020 A MONCLOVA, SAN BUENAVENTURA, CUATROCIENEGAS, PIEDRAS NEGRAS, ALLENDE, SABINAS COAHUILA',
      solicita: 'Emilio Ortega Cabada'
    },{
      opciones: 'modificar/eliminar',
      fecha: new Date(),
      consecutivo: 'sein/ds/sp/224/2020',
      dirigido: 'Diego A, Cardona Rangel',
      asunto: 'OFICIO DE COMISIN PARA EL 08 AL 10 DE DICIEMBRE 2020 A MONCLOVA CUATROCIENEGAS Y PIEDRAS NEGRAS ',
      solicita: 'Emilio Ortega Cabada' 
    }]
  }
  minutarioSecretarioParticular;

  //Boton para mostrar el panel de consulta
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
