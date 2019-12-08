import { Component } from '@angular/core';
import { CoursesService } from '../../shared/services/courses/courses.service';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.sass']
})
export class LoadMoreComponent {
  constructor(private coursesService: CoursesService) {}

  loadMore() {
    this.coursesService.loadMoreCourses();
    console.log('load more');
  }
}
