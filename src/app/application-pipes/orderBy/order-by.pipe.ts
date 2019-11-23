import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../courses-dashboard/shared/course.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  compareNumeric(a, b) {
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
  }
  transform(courses: Course[], desc): Course[] {
    const sortedArr = [...courses].sort(this.compareNumeric);
    return desc === 'new' ? sortedArr.reverse() : sortedArr;
  }
}
