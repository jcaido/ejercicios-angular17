import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private fb :FormBuilder) {}

  resultado :string = '';

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    mail: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(500)]]
  })

  submit() :void {
    if (this.formularioContacto.valid)
      this.resultado = 'Todos los datos son válidos';
    else
      this.resultado = 'Hay datos inválidos en el formulario';
  }
}
