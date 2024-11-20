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
  estado1 = true;
  estado2 = false;
  forma = {
    'clase3 clase4': true
  }

  fijar() {
    this.forma['clase3 clase4'] = true;
  }

  eliminar() {
    this.forma['clase3 clase4'] = false;
  }
}
