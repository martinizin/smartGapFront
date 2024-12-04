import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // Ajusta a tu URL de API

  constructor(private http: HttpClient) {}

  obtenerPerfil(): Observable<any> {
    const token = localStorage.getItem('userToken');
    return this.http.get<any>(`${this.apiUrl}/perfil`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  
  }

}
