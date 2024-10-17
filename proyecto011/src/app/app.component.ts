import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formularioConversion :FormGroup = new FormGroup({
    numeroDecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  })

  conversion :string ='';
  potenciaNumero :string = '';
  cantidad :string= '';

  submit() :void {
    if (this.formularioConversion.value.numeroDecimal) {
      if (this.formularioConversion.value.base == 'octal') {
        this.conversion = parseInt(this.formularioConversion.value.numeroDecimal).toString(8);
        this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numeroDecimal), parseInt(this.formularioConversion.value.potencia)).toString();
      }


      if (this.formularioConversion.value.base == 'hexadecimal') {
        this.conversion = parseInt(this.formularioConversion.value.numeroDecimal).toString(16);
        this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numeroDecimal), parseInt(this.formularioConversion.value.potencia)).toString();
      }

      if(this.formularioConversion.value.largo)
        this.cantidad = this.formularioConversion.value.numeroDecimal.length.toString();
    }
  }
}
