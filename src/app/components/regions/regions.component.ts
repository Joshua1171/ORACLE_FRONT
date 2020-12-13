import { Component, OnInit } from '@angular/core';
import { Regions } from 'src/app/models/regions';
import { RegionsService } from 'src/app/services/regions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  titulo='Tabla Regions'
  regions: Regions[] = [];
  constructor(private service: RegionsService) {
    
   }


  ngOnInit(): void {
    this.service.listar().subscribe(regions => this.regions = regions);
  }

  public eliminar(regions: Regions): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${regions.region_name} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(regions.region_id).subscribe(() => {
          this.regions = this.regions.filter(r => r !== regions);
          Swal.fire('Eliminado:', `${regions.region_name} eliminada con éxito`, 'success');
        });
      }
    });
  }

}
