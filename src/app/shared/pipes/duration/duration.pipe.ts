import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe extends TranslatePipe implements PipeTransform {
  transform(duration: string | number): string {
    const hours = Math.floor(+duration / 60) || 0;

    return +duration > 0 && hours < 1
      ? `${duration} ${super.transform('BASE.MINUTES')}`
      : `${hours}  ${super.transform('BASE.HOURS')} ${+duration -
          hours * 60} ${super.transform('BASE.MINUTES')}`;
  }
}
