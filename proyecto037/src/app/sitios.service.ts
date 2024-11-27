import { Injectable } from '@angular/core';
import { ISitio } from './sitio';

@Injectable({
  providedIn: 'root'
})
export class SitiosService {

  private localStorageName = 'sitios';

  constructor() { }

  obtenerSitios(): ISitio[] {
    const sitiosStr = localStorage.getItem(this.localStorageName);

    return sitiosStr ? JSON.parse(sitiosStr) : [];
  }

  agregarSitio(sitio: ISitio): void {
    const sitios = this.obtenerSitios();
    sitios.push(sitio);
    localStorage.setItem(this.localStorageName, JSON.stringify(sitios));
  }

  borrarSitio(url: string): void {
    const sitios = this.obtenerSitios();
    const index = sitios.findIndex((s) => s.url === url);

    if(index !== -1) {
      sitios.splice(index, 1);
      localStorage.setItem(this.localStorageName, JSON.stringify(sitios));
    }
  }

  modificarSitio(sitio: ISitio, urlBuscar: string): void {
    const sitios = this.obtenerSitios();
    const index = sitios.findIndex((s) => s.url === urlBuscar);

    if (index !== -1) {
      sitios[index] = sitio;
      localStorage.setItem(this.localStorageName, JSON.stringify(sitios));
    }
  }
}
