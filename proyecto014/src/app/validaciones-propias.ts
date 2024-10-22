import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidacionesPropias {
  static multiplo5(control :AbstractControl) :ValidationErrors | null {
    let numero = parseInt(control.value);
    if (numero % 5 == 0)
      return null;
    else
      return {multiplo5: true};
  }
 }
