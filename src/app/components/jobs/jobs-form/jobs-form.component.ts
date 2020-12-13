import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/services/jobs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent implements OnInit {

  titulo="Formulario jobs"

  jobs = new Jobs();

  error: any;
  constructor(private service: JobsService,
    private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number= +params.get('id')!;
      if(id){
        this.service.ver(id.toString()).subscribe(region => this.jobs = region)
      }
    });
  }
  public ruta(): boolean{
    var pathname= window.location.pathname;
    console.log(pathname);
    if(pathname==='jobs/form'){
      return true;
    }else{
      return false;
    }
  }


  public crear(): void{
    this.service.crear(this.jobs).subscribe(jobs =>{
      console.log(jobs);
      Swal.fire('Creado:',`${this.jobs.job_title} creada con exito`,'success');
      this.router.navigate(['/jobs']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.jobs).subscribe(jobs =>{
      console.log(jobs);
      Swal.fire('Actualizado:',`${this.jobs.job_title} actualizada con exito`,'success');
      this.router.navigate(['/jobs']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }

}
