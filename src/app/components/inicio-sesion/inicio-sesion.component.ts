import { Component } from '@angular/core';
import { EncabezadoComponent } from '../general-components/encabezado/encabezado.component';
import { PieDePaginaComponent } from '../general-components/pie-de-pagina/pie-de-pagina.component';
import { BtnprimaryDirective } from '../../directives/btnprimary.directive';
import { InputFormCustomDirective } from '../../directives/input-form-custom.directive';
import { BtnsecondaryDirective } from '../../directives/btnsecondary.directive';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { usuarioLogin } from '../../models/usuarioLogin';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [EncabezadoComponent, PieDePaginaComponent, BtnprimaryDirective, InputFormCustomDirective, BtnsecondaryDirective, FormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss',
})
export class InicioSesionComponent {
  loginInfo: usuarioLogin = {
    usuario: '',
    password: '',
  };

  constructor(private router: Router) {}

  /**
   * Función para ir a la pagina de registrar
   */
  goToRegister() {
    this.router.navigate(['/register']);
  }

  /**
   * Función enviar formulario
   */
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
