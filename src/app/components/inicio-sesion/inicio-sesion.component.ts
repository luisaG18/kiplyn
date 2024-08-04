import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { PieDePaginaComponent } from '../pie-de-pagina/pie-de-pagina.component';
import { BtnprimaryDirective } from '../../directives/btnprimary.directive';
import { InputFormCustomDirective } from '../../directives/input-form-custom.directive';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [
    EncabezadoComponent,
    PieDePaginaComponent,
    BtnprimaryDirective,
    InputFormCustomDirective,
  ],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss',
})
export class InicioSesionComponent {}
