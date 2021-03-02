import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  imagenBase64: string;
file:File
  @Output()
   archivoSel: EventEmitter<File>= new EventEmitter<File>();

  ngOnInit(): void {
  }
  change(event){
    
    if(event.target.files.length>0){
      this.file = event.target.files[0];
      toBase64(this.file).then((value:string)=> this.imagenBase64=value)
      this.archivoSel.emit(this.file);
    }
  }
}
