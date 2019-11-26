import { IsFreshStatusDirective } from './isFreshStatus.directive';
import { ElementRef } from '@angular/core';
import { DateService } from 'src/app/shared/services/date/date-service.service';
import { CourseComponent } from '../../courses-dashboard/course/course.component';

describe('IsFreshStatusDirective', () => {
  it('should create an instance', () => {
    const directive = new IsFreshStatusDirective(
      new ElementRef(CourseComponent),
      new DateService()
    );
    expect(directive).toBeTruthy();
  });
});
