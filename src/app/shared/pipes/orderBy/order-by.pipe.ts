import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../course.model';

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
  transform(courses: Course[], by, desc): Course[] {
    const sortedArr = [...courses].sort((prev, next) =>
      this.compareNumeric(prev[by], next[by])
    );
    return desc === 'last' ? sortedArr.reverse() : sortedArr;
  }
}
