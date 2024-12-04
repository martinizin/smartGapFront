import { Routes } from '@angular/router';
import { LoginComponent } from './componenetes/login/login.component';
import { RegistroComponent } from './componenetes/registro/registro.component';
import { PerfilesComponent } from './componenetes/perfiles/perfiles.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige al login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'perfil', component: PerfilesComponent },
];
