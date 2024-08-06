import { Routes } from '@angular/router';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ConfirmarCodigoComponent } from './components/confirmar-codigo/confirmar-codigo.component';

export const routes: Routes = [
  { path: '', component: InicioSesionComponent, title: 'Iniciar sesión' },
  { path: 'register', component: RegistrarseComponent, title: 'Registrarse' },
  { path: 'confirm-code', component: ConfirmarCodigoComponent, title: 'Confirmar cófigo' },
];
