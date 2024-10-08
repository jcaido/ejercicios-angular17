import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.css'
})
export class CronometroComponent implements OnInit {

  segundo :number = 0;
  @Input() inicio :number = 0;
  @Output() multiplo10 = new EventEmitter<number>();

  ngOnInit(): void {
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0) {
        this.multiplo10.emit(this.segundo);
      }
    }, 1000)
  }
}
