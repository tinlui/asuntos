import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-consultar-asunto',
  templateUrl: './consultar-asunto.component.html',
  styleUrls: ['./consultar-asunto.component.css'],
})
export class ConsultarAsuntoComponent implements OnInit {
  @Input()
  consultarAsuntos;
  formularios: FormGroup;


  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private _formBuilder: FormBuilder) {}

  asuntos;

  ngOnInit(): void {
    this.asuntos = this.consultarAsuntos;

    this.formularios = this._formBuilder.group({
      noOficio: ['', Validators.required],
      Documento: [''],
      Recepcion: [''],
      Dirigido: [''],
      Enviado: [''],
      Asunto: [''],
      Observaciones: [''],
    });

    this.formularios.valueChanges.subscribe((valores) => {
      this.buscarOficio(valores);
    });

    this.filteredOptions = this.formularios.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

  /*   for (let index = 0; index < this.consultarAsuntos[0].length; index++) {
      this.options.push(this.consultarAsuntos[0][index]['noOficio']);
    } */
  }
  private _filter(value: string): string[] {
    
    const filterValue = value;
    
    return this.consultarAsuntos[0].filter(option =>  option.noOficio.indexOf(filterValue) === 0);
    
  }

  buscarOficio(valores: any) {
    if (valores.noOficio) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.noOficio.indexOf(valores.noOficio) !== -1   
      );
    }
    if (valores.Documento) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.noOficio.indexOf(valores.Documento) !== -1
      );
    }
    if (valores.Recepcion) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.noOficio.indexOf(valores.Recepcion) !== -1
      );
    }
    if (valores.Dirigido) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.noOficio.indexOf(valores.Dirigido) !== -1
      );
    }
    if (valores.Envia) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.noOficio.indexOf(valores.Envia) !== -1
      );
    }
    if (valores.Asunto) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.noOficio.indexOf(valores.Asunto) !== -1
      );
    }
    if (valores.Observaciones) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.noOficio.indexOf(valores.Observaciones) !== -1
      );
    }
  }
}
