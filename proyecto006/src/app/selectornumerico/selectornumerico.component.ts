import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  standalone: true,
  imports: [],
  templateUrl: './selectornumerico.component.html',
  styleUrl: './selectornumerico.component.css'
})
export class SelectornumericoComponent implements OnInit{

  @Input() minimo :number = 1;
  @Input() maximo :number = 1;
  actual :number = 1;

  ngOnInit(): void {
    this.actual = this.minimo;
  }

  incrementar() :void {
    if (this.actual<this.maximo) {
      this.actual++;
    }
  }

  decrementar() :void {
    if(this.actual>this.minimo)
      this.actual--;
  }

  fijar(v :number) :void {
    if(v >= this.minimo && v <= this.maximo)
      this.actual = v;
  }
}
