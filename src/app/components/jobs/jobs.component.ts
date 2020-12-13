import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/services/jobs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  titulo='Tabla Jobs'
  jobs: Jobs[] = [];
  constructor(private service: JobsService) {
    
   }


  ngOnInit(): void {
    this.service.listar().subscribe(jobs => this.jobs = jobs);
  }

  public eliminar(jobs: Jobs): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${jobs.job_title} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(jobs.job_id).subscribe(() => {
          this.jobs = this.jobs.filter(j => j !== jobs);
          Swal.fire('Eliminado:', `${jobs.job_title} eliminada con éxito`, 'success');
        });
      }
    });
  }
}
