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
  @Input() nextAmountOfCourses: number;
  @Output() updatedCoursesList$ = new EventEmitter<Observable<Course[]>>();

  constructor(private coursesService: CoursesService) {}

  loadMore() {
    this.updatedCoursesList$.emit(
      this.coursesService.loadMoreCourses(this.nextAmountOfCourses)
    );
    console.log('load more');
  }
}
