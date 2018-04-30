import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function matchingFieldsValidator(firstFieldName: string, secondFieldName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstControl = control.get(firstFieldName);
    const secondControl = control.get(secondFieldName);
    return firstControl.value === secondControl.value ? null : {nonMatchingPasswords: true};
  };
}
