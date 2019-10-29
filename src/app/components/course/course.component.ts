import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})
export class CourseComponent {
  @Input()
  course;

  @Output()
  deleted = new EventEmitter<number>();

  onDelete() {
    this.deleted.emit(this.course.id);
  }
}
