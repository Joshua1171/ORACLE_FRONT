import { Component, OnInit } from '@angular/core';
import { Aspirantes } from 'src/app/models/aspirantes';
import { AspirantesService } from 'src/app/services/aspirantes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aspirantes',
  templateUrl: './aspirantes.component.html',
  styleUrls: ['./aspirantes.component.css']
})
export class AspirantesComponent implements OnInit {
  titulo='Lista de Aspirantes'
  aspirantes: Aspirantes[] = [];
  variable: string='buscar';
  constructor(private service: AspirantesService) {
    
   }

  ngOnInit(): void {
    this.service.listar().subscribe(aspirantes => this.aspirantes = aspirantes);
  }
  public filtrar(): void{
    this.service.buscarUsuario(this.variable).subscribe(aspirantes =>{
      this.aspirantes=aspirantes
      console.log(aspirantes);
    });
}
public limpiar(): void{
  this.variable='';
  this.service.listar().subscribe(aspirantes => this.aspirantes = aspirantes);
}
}

