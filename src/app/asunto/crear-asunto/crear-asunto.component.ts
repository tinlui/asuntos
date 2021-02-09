import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asuntoCreacionDTO } from '../asunto';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-crear-asunto',
  templateUrl: './crear-asunto.component.html',
  styleUrls: ['./crear-asunto.component.css']
})
export class CrearAsuntoComponent implements OnInit {

  constructor(private router: Router,public dialogRef: MatDialogRef<CrearAsuntoComponent> ) { }

  ngOnInit(): void {
  }
  guardarAsuntos(asunto: asuntoCreacionDTO){
    console.log(asunto)
    this.router.navigate(['/asuntos'])
    this.dialogRef.close();
  }
}
