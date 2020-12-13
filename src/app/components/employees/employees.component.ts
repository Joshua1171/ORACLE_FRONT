import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employees';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  titulo='Tabla Employees'
  employees: Employees[] = [];
  constructor(private service: EmployeesService) {
    
   }


  ngOnInit(): void {
    this.service.listar().subscribe(employees => this.employees = employees);
  }

  public eliminar(employees: Employees): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${employees.employee_id} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(employees.employee_id).subscribe(() => {
          this.employees = this.employees.filter(e => e !== employees);
          Swal.fire('Eliminado:', `${employees.employee_id} eliminada con éxito`, 'success');
        });
      }
    });
  }
}
