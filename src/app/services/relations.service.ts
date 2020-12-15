import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RelacionLCR } from '../models/relacion-lcr';

@Injectable({
  providedIn: 'root'
})
export class RelationsService {

  private baseEndpoint='http://localhost:8080/locations/cr';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<RelacionLCR[]>{
    return this.http.get<RelacionLCR[]>(this.baseEndpoint);
  }
}
