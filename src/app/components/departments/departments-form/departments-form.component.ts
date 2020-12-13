import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departments } from 'src/app/models/departments';
import { DepartmentsService } from 'src/app/services/departments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: ['./departments-form.component.css']
})
export class DepartmentsFormComponent implements OnInit {
  titulo="Formulario departments"

  departments = new Departments();

  error: any;
  constructor(private service: DepartmentsService,
    private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number= +params.get('id')!;
      if(id){
        this.service.ver(id).subscribe(departent => this.departments =departent)
      }
    });
  }
  public ruta(): boolean{
    var pathname= window.location.pathname;
    console.log(pathname);
    if(pathname==='departments/form'){
      return true;
    }else{
      return false;
    }
  }


  public crear(): void{
    this.service.crear(this.departments).subscribe(departments =>{
      console.log(departments);
      Swal.fire('Creado:',`${this.departments.department_name} creada con exito`,'success');
      this.router.navigate(['/departments']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.departments).subscribe(locations =>{
      console.log(locations);
      Swal.fire('Actualizado:',`${this.departments.department_name} actualizada con exito`,'success');
      this.router.navigate(['/locations']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }

}
