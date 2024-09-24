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
  nombre: string = 'Rodriguez Pablo';
  edad: number = 40;
  email: string = 'rpablo@gmail.com';
  sueldos: number[] = [1700, 1600, 1900];
  activo: boolean = true;

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
}
