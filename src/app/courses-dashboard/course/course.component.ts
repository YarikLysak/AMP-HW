import {
  Component,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

import { Course } from '../shared/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
