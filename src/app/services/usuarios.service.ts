import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private baseEndpoint='http://localhost:8080/usuarios';
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public buscarUsuario(email: string,password:string):Observable<Usuarios>{
      return this.http.get<Usuarios>(`${this.baseEndpoint}/${email}/password/${password}`)
  }
}
