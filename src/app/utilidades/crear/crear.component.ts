import { Component,  OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { capturaCreacionDTO } from '../captura';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private router: Router,public dialogRef: MatDialogRef<CrearComponent>) {  

  }

  ngOnInit(): void {

  }
  guardarMinutario(model:capturaCreacionDTO){
console.log(model);

    this.dialogRef.close();
}
}

