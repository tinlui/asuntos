import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { contactosDTO } from '../asunto/asunto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorespondenciaService {

  constructor(private http: HttpClient) { }

private apiURL=environment.apiURL;

  public obtenerTodos(): Observable<contactosDTO[]>{
    //para obtener toda la correspondencia de la base de datos o consultas
    return this.http.get<contactosDTO[]>(this.apiURL);
    
  }
}
