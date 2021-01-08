import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countries';
import { CountriesService } from 'src/app/services/countries.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  titulo='Tabla Countries'
  countries: Countries[] = [];
  constructor(private service: CountriesService) {
    
   }

  ngOnInit(): void {
    this.service.listar().subscribe(countries => this.countries = countries);
  }

  public eliminar(country: Countries): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${country.country_name} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(country.country_id).subscribe(() => {
          this.countries = this.countries.filter(a => a !== country);
          Swal.fire('Eliminado:', `Persona ${country.country_name} eliminada con éxito`, 'success');
        });
      }
    });
  }
}
