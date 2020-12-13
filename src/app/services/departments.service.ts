import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departments } from '../models/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private baseEndpoint='http://localhost:8080/departments';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<Departments[]>{
    return this.http.get<Departments[]>(this.baseEndpoint);
  }
  public ver(id: number): Observable<Departments>{
    return this.http.get<Departments>(`${this.baseEndpoint}/${id}`);
  }
  public crear(departments: Departments): Observable<Departments> {
    return this.http.post<Departments>(`${this.baseEndpoint}/${departments.department_id}`, departments,
      { headers: this.cabeceras });
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(departments: Departments): Observable<Departments> {
    return this.http.put<Departments>(`${this.baseEndpoint}/${departments.department_id}`,departments,
      { headers: this.cabeceras });
  }
}
