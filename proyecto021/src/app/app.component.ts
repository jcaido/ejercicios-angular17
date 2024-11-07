import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DatosCovidService } from './datos-covid.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  datosCovid :any;

  constructor(private datosCovidService :DatosCovidService) {
    datosCovidService.obtenerDatosCovid()
      .subscribe((result) => {
        this.datosCovid = result;
      })
  }
}
