import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capturaCreacionDTO } from '../captura';

@Component({
  selector: 'app-captura-minutario',
  templateUrl: './captura-minutario.component.html',
  styleUrls: ['./captura-minutario.component.css']
})
export class CapturaMinutarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {  }
  
  form: FormGroup;


  @Output()
  onSubmit: EventEmitter<capturaCreacionDTO> = new EventEmitter<capturaCreacionDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      oficio: ['',{validators: [Validators.required, Validators.minLength(14)]},
      ],
      fecha:[''],
      asunto: [''],
      dirigido:[''],
      solicita:[''],
    });
    
  }
  guardarMinutario() {
   this.onSubmit.emit(this.form.value);
  }
}
