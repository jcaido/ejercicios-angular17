import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
  standalone: true
})
export class ResaltadoDirective implements OnInit, OnChanges {

  @Input('appResaltado') colorResaltado!: string;
  @Input('tamano') tam: number = 0;

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.actualizar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.actualizar();
  }

  actualizar() {

    if (this.colorResaltado != null)
      this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
    else
      this.elemento.nativeElement.style.backgroundColor = 'yellow';

    if(this.tam > 0) {
      console.log(this.elemento.nativeElement);
      this.elemento.nativeElement.style.fontSize = this.tam + 'px';
    }
  }
}
