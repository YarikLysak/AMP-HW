import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input
} from '@angular/core';
import { Observable } from 'rxjs';

import { CoursesService } from '../../shared/services/courses/courses.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent {
  @Output() updatedCoursesList = new EventEmitter<void>();

  loadMore() {
    this.updatedCoursesList.emit();
    console.log('load more');
  }
}
