import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isError'
})
export class IsErrorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
