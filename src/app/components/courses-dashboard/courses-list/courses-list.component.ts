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
  public courseList: Array<Course>;

  constructor(
    private courseService: CoursesService,
    private orderByPipe: OrderByPipe
  ) {}

  ngOnInit() {
    this.courseList = this.courseService.getCourses();
    this.orderByPipe.transform(this.courseList);
  }

  onDelete(id: number) {
    console.log(id, 'delete');
    return id;
  }
}
