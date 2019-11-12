import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    duration = +duration;
    const hours = Math.floor(duration / 60) || 0;

    return duration > 0 && hours < 1
      ? `${duration} min`
      : `${hours}h ${duration - hours * 60} min`;
  }
}
