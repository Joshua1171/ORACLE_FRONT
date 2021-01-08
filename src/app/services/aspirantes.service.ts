import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aspirantes } from '../models/aspirantes';

@Injectable({
  providedIn: 'root'
})
export class AspirantesService {
  private baseEndpoint='http://localhost:8080/aspirantes';
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<Aspirantes[]>{
    return this.http.get<Aspirantes[]>(this.baseEndpoint);
  }
  public buscarUsuario(dato: string):Observable<Aspirantes[]>{
    return this.http.get<Aspirantes[]>(`${this.baseEndpoint}/filtrar/${dato}`);
}
}
