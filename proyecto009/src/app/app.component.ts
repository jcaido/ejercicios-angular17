import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  actividad = new FormControl();

  actividades :string[] = [];

  ngOnInit(): void {
      let datos :string | null = localStorage.getItem('actividades');
      if(datos != null) {
        let arrayActividades = JSON.parse(datos);
        for(let elemento of arrayActividades) {
          this.actividades.push(elemento);
        }
      }
  }

  agregar() {
    this.actividades.push(this.actividad.value);
    localStorage.setItem('actividades', JSON.stringify(this.actividades));
    this.actividad.setValue("");
  }

  borrar(index :number) {
    this.actividades.splice(index, 1);
    localStorage.setItem('actividades', JSON.stringify(this.actividades));
  }

  borrarTodas() {
    this.actividades = [];
    localStorage.clear()
    this.actividad.setValue("");
  }
}
