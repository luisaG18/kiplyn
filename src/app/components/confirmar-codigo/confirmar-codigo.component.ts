import { Component } from '@angular/core';
import { EncabezadoComponent } from '../general-components/encabezado/encabezado.component';
import { PieDePaginaComponent } from '../general-components/pie-de-pagina/pie-de-pagina.component';
import { BtnsecondaryDirective } from '../../directives/btnsecondary.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-codigo',
  standalone: true,
  imports: [EncabezadoComponent, PieDePaginaComponent, BtnsecondaryDirective],
  templateUrl: './confirmar-codigo.component.html',
  styleUrl: './confirmar-codigo.component.scss',
})
export class ConfirmarCodigoComponent {
  constructor(private router: Router) {}
  /**
   * Función para ir a la página de registro
   */
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
