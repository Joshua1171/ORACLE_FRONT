import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/models/departments';
import { DepartmentsService } from 'src/app/services/departments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  titulo='Tabla departments'
  departments: Departments[] = [];
  constructor(private service: DepartmentsService) {
    
   }


  ngOnInit(): void {
    this.service.listar().subscribe(d => this.departments = d);
  }

  public eliminar(departments: Departments): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${departments.department_name} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(departments.department_id).subscribe(() => {
          this.departments = this.departments.filter(d => d !== departments);
          Swal.fire('Eliminado:', `${departments.department_name} eliminada con éxito`, 'success');
        });
      }
    });
  }

}
