import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regions } from 'src/app/models/regions';
import { RegionsService } from 'src/app/services/regions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regions-form',
  templateUrl: './regions-form.component.html',
  styleUrls: ['./regions-form.component.css']
})
export class RegionsFormComponent implements OnInit {

  titulo="Formulario Regions"

  regions = new Regions();

  error: any;
  constructor(private service: RegionsService,
    private router:Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number= +params.get('id')!;
      if(id){
        this.service.ver(id).subscribe(region => this.regions = region)
      }
    });
  }
  public ruta(): boolean{
    var pathname= window.location.pathname;
    console.log(pathname);
    if(pathname==='regions/form'){
      return true;
    }else{
      return false;
    }
  }


  public crear(): void{
    this.service.crear(this.regions).subscribe(regions =>{
      console.log(regions);
      Swal.fire('Creado:',`${this.regions.region_name} creada con exito`,'success');
      this.router.navigate(['/regions']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.regions).subscribe(regions =>{
      console.log(regions);
      Swal.fire('Actualizado:',`Country ${this.regions.region_name} actualizada con exito`,'success');
      this.router.navigate(['/regions']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }

}
