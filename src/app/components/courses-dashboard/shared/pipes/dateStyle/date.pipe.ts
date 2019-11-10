import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateStyle'
})
export class DateStylePipe implements PipeTransform {
  private monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  transform(date: any): any {
    const output = date.split('/');
    const monthIndex: any = output[0];
    return `${output[1]} ${this.monthNames[monthIndex - 1]}.${output[2]}`;
  }
}
