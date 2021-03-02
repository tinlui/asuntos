import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { capturaCreacionDTO } from '../captura';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditarComponent> ) 
  { }

  modelo: capturaCreacionDTO= {
    consecutivo: 'sein/ds/2021/18',fecha: new Date(),dirigido_a:12, solicita:167, asunto: 'string'
  }

  ngOnInit(): void {
  }
  
  editar=this.modelo;

  guardarMinutario(minutario: capturaCreacionDTO ){
    console.log(minutario)
    this.dialogRef.close();
  }
}
