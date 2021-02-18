import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { contactosDTO } from 'src/app/utilidades/select';

@Component({
  selector: 'app-consultar-asunto',
  templateUrl: './consultar-asunto.component.html',
  styleUrls: ['./consultar-asunto.component.css'],
})
export class ConsultarAsuntoComponent implements OnInit {
  @Input()
  consultarAsuntos;
  
  @Output()
  public filtrarAsuntos = new EventEmitter<any>();

  formularios: FormGroup;

  options: string[] = [];
  optionsDirigido:string[] = [];
  optionsEnviado:string[]=[];

  filteredOptions: Observable<string[]>;
  filteredDirigido:Observable<string[]>;
  filteredEnviado:Observable<string[]>;

  constructor(private _formBuilder: FormBuilder) {}

  asuntos;

  
  listDirigidos:contactosDTO[]=[
    {id_contacto:3963, nombre:'GERARDO BERLANGA GOTES'},
    {id_contacto:12, nombre:'RAUL RODRIGUEZ'},
    {id_contacto:167, nombre:'MARTÍN VALDÉS RODRÍGUEZ'},
 
  ]

  listEnviados:contactosDTO[]=this.listDirigidos
  filtro: contactosDTO[] =this.listDirigidos;
  formularioOriginal = {
    no_docto_original: [''],
    fecha_documento: [''],
    fecha_recepcion: [''],
    dirigido_a: [''],
    enviado_por: [''],
    asunto: [''],
    observaciones: [''],
  };
  ngOnInit(): void {
    
    this.formularios = this._formBuilder.group(this.formularioOriginal);
    this.asuntos = this.consultarAsuntos;
    this.formularios.valueChanges.subscribe((valores) => {
      this.buscarOficio(valores);
    });

    this.filteredOptions = this.formularios.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  
    for (let index = 0; index < this.asuntos[0].length; index++) {
      this.options.push(this.asuntos[0][index]['no_docto_original']);
    }

    this.filteredDirigido=this.formularios.valueChanges.pipe(
      startWith(''),
      map((dirigido)=>this._filterDirigido(dirigido))
    );

    for (let index = 0; index < this.listDirigidos.length; index++) {
      this.optionsDirigido.push(this.listDirigidos[index]['nombre']);
    }
    this.filteredEnviado=this.formularios.valueChanges.pipe(
      startWith(''),
      map((enviado)=>this._filteredEnviado(enviado))
    )
    for (let index = 0; index < this.consultarAsuntos[0].length; index++) {
      this.optionsEnviado.push(this.consultarAsuntos[0][index]['enviado_por']);
    }
  }
  private _filter(value: any): string[] {
    const filterValue = value;
    return this.options.filter(
      (option) => option.indexOf(filterValue.no_docto_original) ===0
    );
  }

  private _filterDirigido(value:any): string[]{
    const filterValue = value;  
    return this.optionsDirigido.filter(
      (option)=>option.indexOf(filterValue.dirigido_a)===0
    )
  }

  private _filteredEnviado(value:any): string[]{
    const filterValue = value;
    return this.optionsEnviado.filter(
      (option)=> option.indexOf(filterValue.enviado_por)
    )
  }

  limpiar() {
    this.formularios.patchValue(this.formularioOriginal);
  }
  buscarOficio(valores: any) {
    if (valores.no_docto_original) {
      this.filtrarAsuntos.emit ( this.asuntos[0].filter(
        (asunto) => asunto.no_docto_original.includes(valores.no_docto_original) 
      ));
    }
    if (valores.dirigido_a) {
      console.log(valores.dirigido_a)
      this.filtrarAsuntos.emit ( this.asuntos[0].filter(
        (asunto) =>
          asunto.dirigido_a.includes(valores.dirigido_a) 
      ));
    } 

    if (valores.Enviado) {
      this.filtrarAsuntos.emit( this.asuntos[0].filter(
        (asunto) => asunto.enviado_por.includes(valores.enviado_por) 
      ));
    }
    
    if (valores.Asunto) {
      this.filtrarAsuntos.emit ( this.asuntos[0].filter(
        (asunto) => asunto.asunto.includes(valores.asunto)
      ));
    }
    /*  if (valores.Documento) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (date: Date) => recepcion.getTime()< date.getTime()
      );
    }
   if (valores.Recepcion) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.recepcion(valores.Recepcion) !== -1
      );
    }
   
  
    if (valores.Observaciones) {
      this.consultarAsuntos[0] = this.consultarAsuntos[0].filter(
        (asunto) => asunto.Observaciones.indexOf(valores.Observaciones) !== -1
      );
    } */
  }
}
