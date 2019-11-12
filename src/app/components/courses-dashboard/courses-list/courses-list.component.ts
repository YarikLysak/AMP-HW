import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';
import { OrderByPipe } from '../shared/pipes/orderBy/order-by.pipe';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  public coursesList: Course[];
  public fromNew = 'new';
  public fromOld = 'old';

  constructor(private courseService: CoursesService) {}

  ngOnInit() {
    this.coursesList = this.courseService.getCourses();
  }

  showFiltered(filteredCoursesList: Course[]) {
    this.coursesList = filteredCoursesList;
  }

  onDelete(id: number) {
    console.log(id, 'delete');
    return id;
  }
}
