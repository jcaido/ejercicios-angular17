import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(private fb :FormBuilder) {}

  formularioContacto = this.fb.group({
    nombre: new FormControl(),
    mail: new FormControl(),
    mensaje: new FormControl()
  })

  datos :string = '';

  submit() :void {
    this.datos = `Nombre = ${this.formularioContacto.value.nombre}
      Mail: ${this.formularioContacto.value.mail}
      Mensaje: ${this.formularioContacto.value.mensaje}`
  }

}
