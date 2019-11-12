import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/components/courses-dashboard/shared/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent {
  @Input()
  course: Course;

  @Output()
  deleted = new EventEmitter<number>();

  onDelete() {
    console.log(this.course);
    this.deleted.emit(this.course.id);
  }
}
