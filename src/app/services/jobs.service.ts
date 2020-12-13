import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jobs } from '../models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  
  private baseEndpoint='http://localhost:8080/jobs';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<Jobs[]>{
    return this.http.get<Jobs[]>(this.baseEndpoint);
  }
  public ver(id: string): Observable<Jobs>{
    return this.http.get<Jobs>(`${this.baseEndpoint}/${id}`);
  }
  public crear(jobs: Jobs): Observable<Jobs> {
    return this.http.post<Jobs>(`${this.baseEndpoint}/${jobs.job_id}`, jobs,
      { headers: this.cabeceras });
  }
  public eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(jobs: Jobs): Observable<Jobs> {
    return this.http.put<Jobs>(`${this.baseEndpoint}/${jobs.job_id}`,jobs,
      { headers: this.cabeceras });
  }
}
