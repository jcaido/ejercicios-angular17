import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  art = {
    codigo: 0,
    descripcion: "",
    precio: 0
  };

  articulos = [
    {codigo: 1, descripcion: "papas", precio: 10.55},
    {codigo: 2, descripcion: "manzanas", precio: 12.10},
    {codigo: 3, descripcion: "melon", precio: 52.30},
    {codigo: 4, descripcion: "cebollas", precio: 17},
    {codigo: 5, descripcion: "calabaza", precio: 20},
  ];

  hayRegistros() :boolean {
    return this.articulos.length > 0;
  }

  agregar() :void {

    if (this.art.codigo == 0) {
      alert("Debes introducir un código de artículo distinto de 0");
    }

    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        alert("Ya exite un artículo con ese código");
      }
    }

    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio
    });

    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;
  }

  modificar() :void {

    if (this.art.codigo == 0) {
      alert("Debe introducir un código de artículo distinto de 0");
    }

    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo ==  this.art.codigo) {
        this.articulos[i].descripcion = this.art.descripcion;
        this.articulos[i].precio = this.art.precio;
        return;
      }
    }

    alert("No existe el código de artículo introducido");

    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;
  }

  borrar(codigo :number) :void {

    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == codigo) {
        this.articulos.splice(i, 1);
      }

    }
  }

  seleccionar(codigo :number) :void {

    this.art.codigo = codigo;
    this.art.descripcion = this.articulos[codigo - 1].descripcion;
    this.art.precio = this.articulos[codigo - 1].precio;
  }
}
