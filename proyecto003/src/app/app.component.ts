import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  valor1: number = this.retornarAleatorio();
  valor2: number = this.retornarAleatorio();
  valor3: number = this.retornarAleatorio();
  resultado: string = '';

  ngOnInit(): void {
    this.comprobarResultado();
  }

  retornarAleatorio(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  lanzarDados(): void {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.comprobarResultado();
  }

  comprobarResultado() :void {
    if (this.valor1 === this.valor2 && this.valor1 === this.valor3) {
      this.resultado = "Has ganado";
    }else {
      this.resultado = "No has ganado";
    }
  }
}
