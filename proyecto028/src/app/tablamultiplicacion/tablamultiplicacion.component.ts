import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicacion',
  standalone: true,
  imports: [],
  templateUrl: './tablamultiplicacion.component.html',
  styleUrl: './tablamultiplicacion.component.css'
})
export class TablamultiplicacionComponent {
  @Input() tabla :number = 0;
}
