import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobHistory } from '../models/jobHistory';

@Injectable({
  providedIn: 'root'
})
export class JobsHistoryService {

  private baseEndpoint='http://localhost:8080/jobHistory';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<JobHistory[]>{
    return this.http.get<JobHistory[]>(this.baseEndpoint);
  }
  public ver(id: number): Observable<JobHistory>{
    return this.http.get<JobHistory>(`${this.baseEndpoint}/${id}`);
  }
  public crear(jobHistory: JobHistory): Observable<JobHistory> {
    return this.http.post<JobHistory>(`${this.baseEndpoint}/${jobHistory.employee_id}`, jobHistory,
      { headers: this.cabeceras });
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(jobHistory: JobHistory): Observable<JobHistory> {
    return this.http.put<JobHistory>(`${this.baseEndpoint}/${jobHistory.employee_id}`,jobHistory,
      { headers: this.cabeceras });
  }
}
