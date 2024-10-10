import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {

  //@Input() valor!: string   //interpolacion sólo acepta tipos string
  @Input() valor!: number;

}
