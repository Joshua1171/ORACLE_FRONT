import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseEndpoint='http://localhost:8080/employees';
  
  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public listar(): Observable<Employees[]>{
    return this.http.get<Employees[]>(this.baseEndpoint);
  }
  public ver(id: number): Observable<Employees>{
    return this.http.get<Employees>(`${this.baseEndpoint}/${id}`);
  }
  public crear(employees: Employees): Observable<Employees> {
    return this.http.post<Employees>(`${this.baseEndpoint}/${employees.employee_id}`, employees,
      { headers: this.cabeceras });
  }
  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

  public editar(employees: Employees): Observable<Employees> {
    return this.http.put<Employees>(`${this.baseEndpoint}/${employees.employee_id}`,employees,
      { headers: this.cabeceras });
  }
}
