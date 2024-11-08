import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre :string = 'Juan Carlos';
  saldo :number = 1000.50;
  dias :string[] = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
  articulos :any = [
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12.33
    },
    {
      codigo: 2,
      descripcion: 'manzanas',
      precio: 54
    }
  ];
  fechaActual :Date = new Date();
}
