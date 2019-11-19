import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/courses-dashboard/shared/course.model';

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
    this.deleted.emit(this.course.id);
  }
}
