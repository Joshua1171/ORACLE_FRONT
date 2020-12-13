import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/employees';
import { EmployeesService } from 'src/app/services/employees.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  titulo="Formulario Employees"

  employees = new Employees();

  error: any;
  constructor(private service: EmployeesService,
    private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number= +params.get('id')!;
      if(id){
        this.service.ver(id).subscribe(employees => this.employees = employees)
      }
    });
  }
  public ruta(): boolean{
    var pathname= window.location.pathname;
    console.log(pathname);
    if(pathname==='employees/form'){
      return true;
    }else{
      return false;
    }
  }


  public crear(): void{
    this.service.crear(this.employees).subscribe(employees =>{
      console.log(employees);
      Swal.fire('Creado:',`${this.employees.employee_id} creada con exito`,'success');
      this.router.navigate(['/employees']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.employees).subscribe(employees =>{
      console.log(employees);
      Swal.fire('Actualizado:',`${this.employees.employee_id} actualizada con exito`,'success');
      this.router.navigate(['/Employees']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }

}
