import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locations } from 'src/app/models/locations';
import { LocationsService } from 'src/app/services/locations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-locations-form',
  templateUrl: './locations-form.component.html',
  styleUrls: ['./locations-form.component.css']
})
export class LocationsFormComponent implements OnInit {
  titulo="Formulario locations"

  locations = new Locations();

  error: any;
  constructor(private service: LocationsService,
    private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number= +params.get('id')!;
      if(id){
        this.service.ver(id).subscribe(location => this.locations = location)
      }
    });
  }
  public ruta(): boolean{
    var pathname= window.location.pathname;
    console.log(pathname);
    if(pathname==='locations/form'){
      return true;
    }else{
      return false;
    }
  }


  public crear(): void{
    this.service.crear(this.locations).subscribe(locations =>{
      console.log(locations);
      Swal.fire('Creado:',`${this.locations.city} creada con exito`,'success');
      this.router.navigate(['/locations']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.locations).subscribe(locations =>{
      console.log(locations);
      Swal.fire('Actualizado:',`${this.locations.city} actualizada con exito`,'success');
      this.router.navigate(['/locations']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }
}
