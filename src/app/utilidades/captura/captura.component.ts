import {  Component,  OnInit,  Inject,  Output,  EventEmitter,  Input,} from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { asuntoCreacionDTO } from '../../asunto/asunto';
import { contactosDTO } from '../select';

@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css'],
})
export class CapturaComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  listDirigidos:contactosDTO[]=[
    {id_contacto:12, nombre:'RAUL RODRIGUEZ'},
    {id_contacto:167, nombre:'MARTÍN VALDÉS RODRÍGUEZ'},
  ]

  form: FormGroup;

  @Input()
  modelo: asuntoCreacionDTO;

  @Output()
  submit: EventEmitter<asuntoCreacionDTO> = new EventEmitter<asuntoCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      noOficio: [
        '',
        {
          validators: [Validators.required, Validators.minLength(6)],
        },
      ],
      nombreDirigido:[0],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  errorNoOficio() {
    var campo = this.form.get('noOficio');
    if (campo.hasError('required')) {
      return 'El campo es requerido';
    }
    if (campo.hasError('minLength')) {
      return 'Longitud minima es de 6';
    }
    return '';
  }
  
  guardarAsuntos() {
    this.submit.emit(this.form.value);
  }
}
