import { Component, OnInit } from '@angular/core';
import { CorespondenciaService } from '../../utilidades/corespondencia.service';

@Component({
  selector: 'app-iindice-asuntos',
  templateUrl: './iindice-asuntos.component.html',
  styleUrls: ['./iindice-asuntos.component.css']
})
export class IindiceAsuntosComponent implements OnInit {

  constructor(private Corespondencia: CorespondenciaService) { }

  ngOnInit(): void {
    const contactos=this.Corespondencia.obtenerTodos();
    console.log(contactos);
  }

}
