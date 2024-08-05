import { Routes } from '@angular/router';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

export const routes: Routes = [
  { path: 'login', component: InicioSesionComponent, title: 'Iniciar sesión' },
  { path: 'register', component: RegistrarseComponent, title: 'Registrarse' },
];
