import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ResaltadoDirective } from './resaltado.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ResaltadoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  colorSelect: string = 'green';
  tamanoFuente: number = 30;

  cambiarColor(col: string) {
    this.colorSelect = col;
  }

  agrandar() {
    this.tamanoFuente++;
  }

  achicar() {
    this.tamanoFuente--;
  }
}
