import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { PieDePaginaComponent } from '../pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [EncabezadoComponent, PieDePaginaComponent],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss',
})
export class InicioSesionComponent {}
