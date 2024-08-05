import { Component } from '@angular/core';
import { EncabezadoComponent } from '../general-components/encabezado/encabezado.component';
import { PieDePaginaComponent } from '../general-components/pie-de-pagina/pie-de-pagina.component';
import { BtnprimaryDirective } from '../../directives/btnprimary.directive';
import { InputFormCustomDirective } from '../../directives/input-form-custom.directive';
import { BtnsecondaryDirective } from '../../directives/btnsecondary.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [EncabezadoComponent, PieDePaginaComponent, BtnprimaryDirective, InputFormCustomDirective, BtnsecondaryDirective],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss',
})
export class InicioSesionComponent {
  // Variable del color del botón secundary
  colorText = 'Black';

  constructor(private router: Router) {}
  /**
   * Función para ir a la pagina de registrar
   */
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
