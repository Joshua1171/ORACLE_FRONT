import { Component, OnInit } from '@angular/core';
import { Locations } from 'src/app/models/locations';
import { LocationsService } from 'src/app/services/locations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  titulo='Tabla locations'
  locations: Locations[] = [];
  constructor(private service: LocationsService) {
    
   }


  ngOnInit(): void {
    this.service.listar().subscribe(locations => this.locations = locations);
  }

  public eliminar(locations: Locations): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${locations.city} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(locations.location_id).subscribe(() => {
          this.locations = this.locations.filter(l => l !== locations);
          Swal.fire('Eliminado:', `${locations.city} eliminada con éxito`, 'success');
        });
      }
    });
  }

}
