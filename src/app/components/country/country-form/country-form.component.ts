import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Countries } from 'src/app/models/countries';
import { CountriesService } from 'src/app/services/countries.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  titulo = "Crear Personas";
  country_id="";
  country_name="";
  region_id=0;
  bandera=false;

  country = new Countries();

  error: any;
  constructor(private service: CountriesService,
    private router:Router,
    private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number= +params.get('id')!;
      if(id){
        this.service.ver(id.toLocaleString()).subscribe(country => this.country = country)

      }
    });
    this.country_id=this.country.country_id;
    this.country_name=this.country.country_name;
    this.region_id=this.country.region_id;
  }

  public ruta(): boolean{
    var pathname= window.location.pathname;
    console.log(pathname);
    if(pathname==='countries/form' && this.bandera){
      return true;
    }else{
      return false;
    }
  }

  public crear(): void{
    this.service.crear(this.country).subscribe(countries =>{
      console.log(countries);
      Swal.fire('Creado:',`Country ${this.country.country_name} creada con exito`,'success');
      this.router.navigate(['/countries']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });


  }
  public editar(): void {
    this.service.editar(this.country).subscribe(countries =>{
      console.log(countries);
      Swal.fire('Actualizado:',`Country ${this.country.country_name} actualizada con exito`,'success');
      this.router.navigate(['/countries']);
    },err => {
        if (err.status === 400){
          this.error=err.error;
          console.log(this.error);
        }
    });

  }
}
