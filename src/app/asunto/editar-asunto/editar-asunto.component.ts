import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialogRef } from "@angular/material/dialog";
import { asuntoDTO } from '../asunto';

@Component({
  selector: 'app-editar-asunto',
  templateUrl: './editar-asunto.component.html',
  styleUrls: ['./editar-asunto.component.css']
})
export class EditarAsuntoComponent implements OnInit {

  constructor(private router: Router,private activatedRoute:ActivatedRoute,public dialogRef: MatDialogRef<EditarAsuntoComponent> ) 
  { }

  modelo: asuntoDTO = 
                      {no_identificacion:0, no_docto_original: 'sein/2021/21',  fecha_recepcion: new Date(),fecha_Documento: new Date(),dirigido_a: 3963,enviado_por:167,
                        asunto: 'string',observaciones:'string',original:1,copia:0, archivo_digital:'path'}
  
    ngOnInit(): void {
   
  
  }
  editar=this.modelo;
  guardarAsuntos(asunto: asuntoDTO){
    this.router.navigate(['/asuntos'])
    this.dialogRef.close();
  }
  
}
