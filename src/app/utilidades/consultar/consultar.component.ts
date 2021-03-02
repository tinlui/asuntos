import { EventEmitter, Output ,Component,OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { contactosDTO } from '../select';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  @Input()
  consulta;

  @Output()
  public filtrarConsulta = new EventEmitter<any>();


  formulario: FormGroup;

  formularioOriginal = {
    consecutivo: [''],
    asunto: [''],
    dirigido_a: [''],
    solicita: [''],
    fecha: [''],
  };
  
  optionC: string[] = [];
  optionA:string[] = [];
  optionD:string[]=[];
  optionS:string[]=[];

  filteredOptionC: Observable<string[]>;
  filteredOptionA:Observable<string[]>;
  filteredOptionD:Observable<string[]>;
  filteredOptionS:Observable<string[]>;


  listDirigidos:contactosDTO[]=[
    {id_contacto:3963, nombre:'Alma Celina Moreira Cañedo'},
    {id_contacto:12, nombre:'Diego A, Cardona Rangel'},
    {id_contacto:167, nombre:'MARTÍN VALDÉS RODRÍGUEZ'},
 
  ]

  listEnviados:contactosDTO[]=this.listDirigidos
  filtro: contactosDTO[] =this.listDirigidos;

  datosConsulta;
  ngOnInit(): void {
    
    this.formulario = this._formBuilder.group(this.formularioOriginal);
    this.datosConsulta=this.consulta;

    this.formulario.valueChanges.subscribe((valores) => {
      this.busqueda(valores);
    });
    
    
    this.filteredOptionC = this.formulario.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterC(value))
    );
   
    for (let index = 0; index < this.datosConsulta.length; index++) {
      this.optionC.push(this.datosConsulta[index]['consecutivo']);
    }

 /*    this.filteredDirigido=this.formularios.valueChanges.pipe(
      startWith(''),
      map((dirigido)=>this._filterDirigido(dirigido))
    );
    for (let index = 0; index < this.listDirigidos.length; index++) {
      this.optionsDirigido.push(this.listDirigidos[index]['nombre']);
    } */

    this.filteredOptionD = this.formulario.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterA(value))
    );
    for (let index = 0; index < this.listDirigidos.length; index++) {
      this.optionD.push(this.listDirigidos[index]['nombre']);
    }

    this.filteredOptionS = this.formulario.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterS(value))
    );
    for (let index = 0; index < this.listDirigidos.length; index++) {
      this.optionS.push(this.listDirigidos[index]['nombre']);
    }
  }

  private _filterC(value: any): string[] {
    const filterValue = value;
    return this.optionC.filter(
      (option) => option.indexOf(filterValue.consecutivo) ===0
    );
  }
  private _filterA(value: any): string[] {
    const filterValue = value;
    return this.optionD.filter(
      (option) => option.indexOf(filterValue.dirigido_a) ===0
    );
  }
  private _filterS(value: any): string[] {
    const filterValue = value;
    return this.optionS.filter(
      (option) => option.indexOf(filterValue.solicita) ===0
    );
  }

  busqueda(valores: any) {
    if (valores.consecutivo) {
     this.filtrarConsulta.emit ( this.datosConsulta.filter(
        (asunto) => asunto.consecutivo.includes(valores.consecutivo) 
      )); 
    }

    if (valores.asunto) {
      this.filtrarConsulta.emit ( this.datosConsulta.filter(
        (asunto) =>  asunto.asunto.includes(valores.asunto) 
      ));
     
    }

    if (valores.dirigido_a) {
        this.filtrarConsulta.emit (this.datosConsulta.filter(
        (asunto) =>asunto.dirigido_a.includes(valores.dirigido_a) 
      ));
     
    }

    if (valores.solicita) {
      this.filtrarConsulta.emit ( this.datosConsulta.filter(
        (asunto) => asunto.solicita.includes(valores.solicita) 
      ));
    }

    if (valores.fecha) {
      this.filtrarConsulta.emit ( this.datosConsulta.filter(
        (asunto) => asunto.fecha.includes(valores.fecha) 
      ));
    }
  }
}
