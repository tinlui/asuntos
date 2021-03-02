import {  Component,  OnInit,  Inject,  Output,  EventEmitter,  Input,} from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { asuntoCreacionDTO, asuntoDTO } from '../../asunto/asunto';
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
  editar: asuntoDTO;

  @Output()
  submit: EventEmitter<asuntoCreacionDTO> = new EventEmitter<asuntoCreacionDTO>();
  
 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      no_docto_original: [
        '',
        {
          validators: [Validators.required, Validators.minLength(6)],
        },
      ], 
      fecha_recepcion: [''],
      fecha_Documento: [''],
      dirigido_a:[0],
      enviado_por:[0],
      asunto: [''],
  observaciones:[''],
  original:[0],
  copia:[0],
  archivo_digital:['']
    });

    if (this.editar !== undefined) {
      this.form.patchValue(this.editar);
    }
  }
  errorNoOficio() {
    var campo = this.form.get('no_docto_original');
    if (campo.hasError('required')) {
      return 'El campo es requerido';
    }
    if (campo.hasError('minLength')) {
      return 'Longitud minima es de 6';
    }
    return '';
  }
  archivoPDF(archivo:File){
    this.form.get('archivo_digital').setValue(archivo);
  }
  
  guardarAsuntos() {
    this.submit.emit(this.form.value);
  }
}
