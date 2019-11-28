import { ElementRef } from '@angular/core';
import { IsFreshStatusDirective } from './isFreshStatus.directive';

import { CourseComponent } from '../../courses-dashboard/course/course.component';

import { DateService } from '../../shared/services/date/date-service.service';

describe('IsFreshStatusDirective', () => {
  it('should create an instance', () => {
    const directive = new IsFreshStatusDirective(
      new ElementRef(CourseComponent),
      new DateService()
    );
    expect(directive).toBeTruthy();
  });
});
