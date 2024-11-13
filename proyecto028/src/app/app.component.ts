import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablamultiplicacionComponent } from "./tablamultiplicacion/tablamultiplicacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TablamultiplicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numeros :number[] = [...Array(9999).keys()].map(num => num + 2);
}
