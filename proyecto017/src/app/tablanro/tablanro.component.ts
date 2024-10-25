import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablanro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablanro.component.html',
  styleUrl: './tablanro.component.css'
})
export class TablanroComponent {

  nro :number = 0;
  tabla :string = '';

  constructor(private activatedRoute :ActivatedRoute) {
    activatedRoute.paramMap.subscribe((parametros :ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!);
      this.tabla = '';
      for (let x = 1; x <= 10; x++) {
        let t = x * this.nro;
        this.tabla += t + '-';
      }
    })
  }

}
