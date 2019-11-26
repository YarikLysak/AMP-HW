import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../course.model';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {
  transform(searchStr: string, coursesList: Course[]): Course[] {
    return [...coursesList].filter(item => {
      return item.title.toLowerCase().includes(searchStr.toLowerCase());
    });
  }
}