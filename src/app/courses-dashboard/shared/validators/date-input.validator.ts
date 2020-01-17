import { FormControl } from '@angular/forms';

export function dateValidator(control: FormControl) {
  const DATE_REGEXP = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
  const dateFormat = 'dd/MM/yyyy';

  return DATE_REGEXP.test(control.value)
    ? null
    : {
        validateDate: {
          valid: false,
          dateFormat
        }
      };
}
