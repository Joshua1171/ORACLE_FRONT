import { Component, OnInit } from '@angular/core';
import { JobHistory } from 'src/app/models/jobHistory';
import { JobsHistoryService } from 'src/app/services/jobs-history.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobh',
  templateUrl: './jobh.component.html',
  styleUrls: ['./jobh.component.css']
})
export class JobhComponent implements OnInit {

  titulo='Tabla JobHistory'
  jobh: JobHistory[] = [];
  constructor(private service: JobsHistoryService) {
    
   }


  ngOnInit(): void {
    this.service.listar().subscribe(jobh => this.jobh = jobh);
  }

  public eliminar(jobh: JobHistory): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${jobh.employee_id} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(jobh.employee_id).subscribe(() => {
          this.jobh = this.jobh.filter(j => j !== jobh);
          Swal.fire('Eliminado:', `${jobh} eliminada con éxito`, 'success');
        });
      }
    });
  }
}
