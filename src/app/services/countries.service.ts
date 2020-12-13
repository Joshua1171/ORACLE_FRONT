import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private baseEndpoint='http://localhost:8888/countries';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  
  public listar(): Observable<Countries[]>{
    return this.http.get<Countries[]>(this.baseEndpoint);
  }
  public ver(id: number): Observable<Countries>{
    return this.http.get<Countries>(`${this.baseEndpoint}/${id}`);
  }
  public crear(Countries: Countries): Observable<Countries> {
    return this.http.post<Countries>(this.baseEndpoint, Countries,
      { headers: this.cabeceras });
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(Countries: Countries): Observable<Countries> {
    return this.http.put<Countries>(`${this.baseEndpoint}/${Countries.country_id}`,Countries,
      { headers: this.cabeceras });
  }
}
