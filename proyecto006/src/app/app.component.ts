import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SelectornumericoComponent } from "./selectornumerico/selectornumerico.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SelectornumericoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('selector1') selector1!:SelectornumericoComponent;
  @ViewChild('selector2') selector2!: SelectornumericoComponent;

  fijarSelector1(valor :number) :void {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor :number) :void {
    this.selector2.fijar(valor);
  }
}
