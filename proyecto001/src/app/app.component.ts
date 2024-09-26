import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Articulo } from './articulo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre: string = 'Rodriguez Pablo';
  edad: number = 40;
  email: string = 'rpablo@gmail.com';
  sueldos: number[] = [1700, 1600, 1900];
  activo: boolean = true;
  articulos: Articulo[] = [
    {
      codigo: 1,
      descripcion: 'naranjas',
      precio: 540
    },
    {
      codigo: 2,
      descripcion: 'manzanas',
      precio: 900
    },
    {
      codigo: 3,
      descripcion: 'peras',
      precio: 490
    }
  ]

  contador: number = 1;
  nombrePersona: string = '';

  esActivo() :string {
    if (this.activo)
      return 'Trabajador activo';
    else
      return 'Trabajador inactivo';
  }

  ultimos3Sueldos() :number {
    let suma: number = 0;
    for (let index = 0; index < this.sueldos.length; index++)
      suma += this.sueldos[index];

    return suma;
  }

  generarNumero() :number{
    return Math.floor(Math.random() * 3) +1;
  }

  incrementar(): void {
    this.contador++;
  }

  decrementar(): void {
    this.contador--;
  }

  fijarNombre1() :void {
    this.nombrePersona = 'Juan';
  }

  fijarNombre2(): void {
    this.nombrePersona = 'Ana';
  }
}
