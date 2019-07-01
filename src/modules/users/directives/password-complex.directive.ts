import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';
import {UserService} from '../services/user.service';

@Directive({
  selector: '[appPasswordComplex]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordComplexDirective, multi: true}]
})

export class PasswordComplexDirective implements Validator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    return passwordComplexValidator()(control);
  }
}

export function passwordComplexValidator(): ValidatorFn {
  const anUpperCase = /[A-Z]/;
  const aLowerCase = /[a-z]/;
  const aNumber = /[0-9]/;
  const aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  const minLength = 8;

  return (control: AbstractControl): { [key: string]: any } | null => {
    let isPasswordComplex = true;
    const password = control.value;

    if (!password ||
      password.length < minLength ||
      password.search(anUpperCase) === -1 ||
      password.search(aLowerCase) === -1 ||
      password.search(aNumber) === -1 ||
      password.search(aSpecial) === -1) {
      isPasswordComplex = false;
    }

    return isPasswordComplex ? null : {appPasswordComplex: {valid: false}};
  };
}
