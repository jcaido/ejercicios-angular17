import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
              <h1>Componente de Angular</h1>
              <p>La plantilla de la componente se encuentra definida directamente en el decorador </p>
            `,
  styles: `
            h1 {
              color: red
            }
            p {
              color: blue
            }
          `
})
export class AppComponent {
  title = 'proyecto038';
}
