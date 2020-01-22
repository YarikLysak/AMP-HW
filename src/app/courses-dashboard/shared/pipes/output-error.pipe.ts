import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Pipe({
  name: 'outputError'
})
export class OutputErrorPipe extends TranslatePipe implements PipeTransform {
  transform(errors: any): string {
    for (const errorName in errors) {
      if (errors.hasOwnProperty(errorName)) {
        switch (errorName) {
          case 'required':
            return super.transform('BASE.ERR_REQUIRED');
          case 'maxlength':
            return super.transform('BASE.ERR_MAXLENGTH', {
              lentgh: errors[errorName].requiredLength
            });
          case 'validateDate':
            return super.transform('BASE.ERR_DAYFORMAT', {
              dateFormat: errors[errorName].dateFormat
            });
          default:
            return '';
        }
      }
    }
  }
}
