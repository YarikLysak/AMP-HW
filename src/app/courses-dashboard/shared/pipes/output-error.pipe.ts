import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outputError'
})
export class OutputErrorPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return null;
  }
}
