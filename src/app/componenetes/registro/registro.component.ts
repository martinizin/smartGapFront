import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  contrasena: string = '';
  carrera: string = '';
  semestre: string = '';
  genero: string = '';
  error: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      contrasena: this.contrasena,
      carrera: this.carrera,
      semestre: this.semestre,
      genero: this.genero
    };

    this.loginService.registrar(usuario).subscribe({
      next: (data) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error = 'Hubo un problema al registrar el usuario';
      }
    });
  }

}
