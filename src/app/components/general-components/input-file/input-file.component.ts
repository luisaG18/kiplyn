import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
})
export class InputFileComponent {
  // Elemento del input type file
  @ViewChild('fileInput') fileInput!: ElementRef;
  // Variable para guardar la imagen seleccionada
  selectedImage: any = null;

  /**
   * Función para abrir el explorador de archivos
   */
  openFileExplorer() {
    // Hacemos click para abrir el explorador de archivos
    this.fileInput.nativeElement.click();
  }

  /**
   * Función para obtener la imagen seleccionada y guardarla
   * @param event Evento del input
   */
  onFileSelected(event: Event) {
    // Guardamos el event.target del input
    const input = event.target as HTMLInputElement;
    // Validamos que haya algun archivo seleccionado
    if (input.files && input.files.length > 0) {
      // Guardamos el archivo
      const file = input.files[0];
      // Instanciamos el fileReader que nos permite
      // leer el contenido de los archivos almacenados en el sistema
      const reader = new FileReader();
      // Cuando la lectura del archivo termina guardamos la imagen
      reader.onload = (e: ProgressEvent<FileReader>) => {
        // Guardamos la imagen que esta en el result
        this.selectedImage = e.target?.result;
      };
      // Llamamos la función asincrona de leer el archivo y lo presenta en una URl(base64)
      reader.readAsDataURL(file);
    }
  }
}
