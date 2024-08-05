import { Component } from '@angular/core';
import { EncabezadoComponent } from '../general-components/encabezado/encabezado.component';
import { PieDePaginaComponent } from '../general-components/pie-de-pagina/pie-de-pagina.component';
import { InputFormCustomDirective } from '../../directives/input-form-custom.directive';
import { BtnprimaryDirective } from '../../directives/btnprimary.directive';
import { BtnsecondaryDirective } from '../../directives/btnsecondary.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [EncabezadoComponent, PieDePaginaComponent, InputFormCustomDirective, BtnprimaryDirective, BtnsecondaryDirective],
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
}
