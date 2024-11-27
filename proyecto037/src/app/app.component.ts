import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SitiosService } from './sitios.service';
import { ISitio } from './sitio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  sitio: ISitio = {
    url: '',
    description: ''
  }

  sitioSeleccionado: string = '';

  sitios: ISitio[] = [];

  constructor(private sitioService: SitiosService) {
    this.sitios = sitioService.obtenerSitios();
  }

  borrar(url: string): void {
    this.sitioService.borrarSitio(url);
    this.sitios = this.sitioService.obtenerSitios();
  }

  agregar(): void {
    if (this.sitio.url.trim() === '') {
      alert('Debe ingresar una URL de sitio');
      return;
    }

    if (this.sitios.some((s) => s.url === this.sitio.url)) {
      alert('Ya existe un sitio con dicha URL');
      return;
    }

    this.sitioService.agregarSitio(this.sitio);
    this.sitio = {
      url: '',
      description: ''
    }
    this.sitios = this.sitioService.obtenerSitios();
  }

  seleccionar(sitio: ISitio): void {
    this.sitioSeleccionado = sitio.url;
    this.sitio.url = sitio.url;
    this.sitio.description = sitio.description;
  }

  modificar(): void {

    if (this.sitio.url.trim() === '') {
      alert('Debe ingresar una URL de sitio');
      return;
    }

    const sitioExistente = this.sitios.find((s) => s.url === this.sitio.url && s.url !== this.sitioSeleccionado);

    if (sitioExistente) {
      alert('Ya existe un sitio con dicha URL');
      return;
    }

    if (this.sitioSeleccionado) {
      const index = this.sitios.findIndex((s) => s.url === this.sitioSeleccionado);
      if (index !== -1) {
        this.sitios[index] = {... this.sitio};
        this.sitioService.modificarSitio(this.sitio, this.sitioSeleccionado);
        this.sitio = {url: '', description: ''};
        this.sitios = this.sitioService.obtenerSitios();
        this.sitioSeleccionado = '';
      }
    }
  }
}
