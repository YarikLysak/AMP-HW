import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(duration: any): any {
    const hours = Math.floor(duration / 60) || 0;
    duration = +duration;

    return duration > 0 && hours < 1
      ? `${duration} min`
      : `${hours}h ${duration - hours * 60} min`;
  }
}
