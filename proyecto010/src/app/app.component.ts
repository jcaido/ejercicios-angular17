import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  })

  datos :string = '';

  confirmar() :void {
    this.datos = `Nombre = ${this.formularioContacto.value.nombre} .-
                  Mail = ${this.formularioContacto.value.mail} .-
                  Mensaje = ${this.formularioContacto.value.mensaje}`;
  }
}
