import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../../courses-dashboard/shared/models/course.model';
import { Order } from './order.type';

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
  transform(courses: Course[], by: string, order: Order): Course[] {
    if (courses) {
      const sortedArr = [...courses].sort((prev, next) =>
        this.compareNumeric(prev[by], next[by])
      );
      return order === 'asc' ? sortedArr.reverse() : sortedArr;
    }
  }
}
