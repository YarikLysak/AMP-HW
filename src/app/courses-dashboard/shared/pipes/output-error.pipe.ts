import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outputError'
})
export class OutputErrorPipe implements PipeTransform {
  transform(errors: any): string {
    for (const errorName in errors) {
      if (errors.hasOwnProperty(errorName)) {
        switch (errorName) {
          case 'required':
            return 'This field is required!';
          case 'maxlength':
            return `Your field should be shorter than ${errors[errorName].requiredLength} symbols.`;
          case 'validateDate':
            return `Incorrect format! Try ${errors[errorName].dateFormat}`;
          default:
            return '';
        }
      }
    }
  }
}
