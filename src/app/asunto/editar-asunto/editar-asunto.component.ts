import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialogRef } from "@angular/material/dialog";
import { asuntoCreacionDTO } from '../asunto';

@Component({
  selector: 'app-editar-asunto',
  templateUrl: './editar-asunto.component.html',
  styleUrls: ['./editar-asunto.component.css']
})
export class EditarAsuntoComponent implements OnInit {

  constructor(private router: Router,private activatedRoute:ActivatedRoute,public dialogRef: MatDialogRef<EditarAsuntoComponent> ) { }
  //modelo: asuntoCreacionDTO = {noOficio:'sidum/245/2021'}
  ngOnInit(): void {
  /*   this.activatedRoute.params.subscribe( params=> {
      alert(params.id);
    });
   */
  }
  guardarAsuntos(asunto: asuntoCreacionDTO){
    console.log(asunto)
    this.router.navigate(['/asuntos'])
    this.dialogRef.close();
  }
  
}
