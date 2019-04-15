import { AbstractControl } from '@angular/forms';

const errorObject = { validAge: true };

export function ValidateAge(control: AbstractControl) {
    if (!control.value) {
        return errorObject;
    }

    const idadeControlValue = parseInt(control.value, 10);
    if (idadeControlValue >= 18 && idadeControlValue <= 25) {
        return null;
    } else {
        return errorObject;
    }
}
