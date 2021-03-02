import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capturaCreacionDTO } from '../captura';
import { contactosDTO } from '../select';

@Component({
  selector: 'app-captura-minutario',
  templateUrl: './captura-minutario.component.html',
  styleUrls: ['./captura-minutario.component.css']
})
export class CapturaMinutarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {  }
  
  form: FormGroup;


  @Input()
  editar: capturaCreacionDTO;

  listDirigidos:contactosDTO[]=[
    {id_contacto:12, nombre:'RAUL RODRIGUEZ'},
    {id_contacto:167, nombre:'MARTÍN VALDÉS RODRÍGUEZ'},
  ]

  @Output()
  submit: EventEmitter<capturaCreacionDTO> = new EventEmitter<capturaCreacionDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      consecutivo: ['',{validators: [Validators.required, Validators.minLength(14)]},
      ],
      fecha:[''],
      dirigido_a: [''],
      asunto:[''],
      solicita:[''],
    });
    
    if (this.editar !== undefined) {
      this.form.patchValue(this.editar);
    }
  }
  guardarMinutario() {
   this.submit.emit(this.form.value);
  }
}
