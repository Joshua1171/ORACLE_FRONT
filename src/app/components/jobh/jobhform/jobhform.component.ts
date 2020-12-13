import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobHistory } from 'src/app/models/jobHistory';
import { JobsHistoryService } from 'src/app/services/jobs-history.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobhform',
  templateUrl: './jobhform.component.html',
  styleUrls: ['./jobhform.component.css']
})
export class JobhformComponent implements OnInit {

  titulo="Formulario JobHistory"

  jobh = new JobHistory();

  error: any;
  constructor(private service: JobsHistoryService,
    private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number= +params.get('id')!;
      if(id){
        this.service.ver(id).subscribe(jobh => this.jobh = jobh)
      }
    });
  }
  public ruta(): boolean{
    var pathname= window.location.pathname;
    console.log(pathname);
    if(pathname==='jobHistory/form'){
      return true;
    }else{
      return false;
    }
  }


  public crear(): void{
    this.service.crear(this.jobh).subscribe(jobh =>{
      console.log(jobh);
      Swal.fire('Creado:',`${this.jobh.employee_id} creada con exito`,'success');
      this.router.navigate(['/jobHistory']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.jobh).subscribe(jobh =>{
      console.log(jobh);
      Swal.fire('Actualizado:',`${this.jobh.employee_id} actualizada con exito`,'success');
      this.router.navigate(['/jobHistory']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }
}
