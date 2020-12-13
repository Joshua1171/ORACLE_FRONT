import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locations } from '../models/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private baseEndpoint='http://localhost:8080/locations';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  public listar(): Observable<Locations[]>{
    return this.http.get<Locations[]>(this.baseEndpoint);
  }
  public ver(id: number): Observable<Locations>{
    return this.http.get<Locations>(`${this.baseEndpoint}/${id}`);
  }
  public crear(locations: Locations): Observable<Locations> {
    return this.http.post<Locations>(this.baseEndpoint, locations,
      { headers: this.cabeceras });
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(locations: Locations): Observable<Locations> {
    return this.http.put<Locations>(`${this.baseEndpoint}/${locations.location_id}`,locations,
      { headers: this.cabeceras });
  }
}
