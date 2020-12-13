import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regions } from '../models/regions';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  private baseEndpoint='http://localhost:8080/regions';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<Regions[]>{
    return this.http.get<Regions[]>(this.baseEndpoint);
  }
  public ver(id: number): Observable<Regions>{
    return this.http.get<Regions>(`${this.baseEndpoint}/${id}`);
  }
  public crear(regions: Regions): Observable<Regions> {
    return this.http.post<Regions>(`${this.baseEndpoint}/${regions.region_id}`, regions,
      { headers: this.cabeceras });
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(regions: Regions): Observable<Regions> {
    return this.http.put<Regions>(`${this.baseEndpoint}/${regions.region_id}`,regions,
      { headers: this.cabeceras });
  }
}
