import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= new Usuarios();
  error: any;

  constructor(private service: UsuariosService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  public validar(): void{
    this.service.buscarUsuario(this.usuario.email,this.usuario.password).subscribe(usuario =>{
      console.log(usuario);
      Swal.fire('Bienvenido:',`Correo: ${this.usuario.email} `,'success');
      this.router.navigate(['/aspirantes']);
    },err => {
        if (err.status){
          Swal.fire('Error!:',`Usuario: ${this.usuario.email} invalido`,'error');
          this.error=err.error;
          console.log(this.error);
          this.router.navigate(['/login']);
        }
    });

    
  }
}
