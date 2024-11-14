import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficotartaComponent } from "./graficotarta/graficotarta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GraficotartaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
