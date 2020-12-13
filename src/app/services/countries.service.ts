import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private baseEndpoint='http://localhost:8080/countries';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  
  public listar(): Observable<Countries[]>{
    return this.http.get<Countries[]>(this.baseEndpoint);
  }
  public ver(id: string): Observable<Countries>{
    return this.http.get<Countries>(`${this.baseEndpoint}/${id}`);
  }
  public crear(countries: Countries): Observable<Countries> {
    return this.http.post<Countries>(`${this.baseEndpoint}/${countries.country_id}`, countries,
      { headers: this.cabeceras });
  }
  public eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(countries: Countries): Observable<Countries> {
    return this.http.put<Countries>(`${this.baseEndpoint}/${countries.country_id}`,countries,
      { headers: this.cabeceras });
  }
}
