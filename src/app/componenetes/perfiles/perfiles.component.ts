import { Component, OnInit } from '@angular/core';
import { PerfilesService } from '../../servicios/perfiles.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [NgIf],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.css'
})
export class PerfilesComponent implements OnInit {
  usuario: any;

  constructor(private perfilService: PerfilesService) {}

  ngOnInit() {
    this.perfilService.obtenerPerfil().subscribe({
      next: (data) => {
        this.usuario = data;
      },
      error: (err) => {
        console.error('Error obteniendo el perfil', err);
      }
    });
  }

}
