import { Component } from '@angular/core';
import { EncabezadoComponent } from '../general-components/encabezado/encabezado.component';
import { PieDePaginaComponent } from '../general-components/pie-de-pagina/pie-de-pagina.component';
import { InputFormCustomDirective } from '../../directives/input-form-custom.directive';
import { BtnprimaryDirective } from '../../directives/btnprimary.directive';
import { BtnsecondaryDirective } from '../../directives/btnsecondary.directive';
import { Router } from '@angular/router';
import { InputFileComponent } from '../general-components/input-file/input-file.component';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [EncabezadoComponent, PieDePaginaComponent, InputFormCustomDirective, BtnprimaryDirective, BtnsecondaryDirective, InputFileComponent],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.scss',
})
export class RegistrarseComponent {
  constructor(private router: Router) {}

  /**
   * Función para ir al login
   */
  goToLogin() {
    this.router.navigate(['/login']);
  }

  /**
   * Función para ir a la página de confirmar código
   */
  goToConfirmCode() {
    this.router.navigate(['/confirm-code']);
  }
}
