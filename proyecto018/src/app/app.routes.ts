import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MapaComponent } from './mapa/mapa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { Pagina404Component } from './pagina404/pagina404.component';

export const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'acercade',
    component: AcercaDeComponent
  },
  {
    path: 'pagina404',
    component: Pagina404Component
  },
  {
    path: '**',
    redirectTo: 'pagina404'
  }
];
