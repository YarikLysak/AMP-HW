import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoursesService } from '../shared/services/courses.service';
import { Course } from '../shared/course.model';
import { FilterCoursePipe } from '../shared/pipes/filterCourse/filterCourse.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  public searchField = new FormControl('');
  public filteredCoursesList: Course[] = [];

  @Output()
  filtered = new EventEmitter<any>();

  constructor(
    private courceService: CoursesService,
    private filterCourse: FilterCoursePipe
  ) {}

  searchCourses() {
    this.filteredCoursesList = this.filterCourse.transform(
      this.searchField.value,
      this.courceService.coursesList
    );
    this.filtered.emit(this.filteredCoursesList);
  }
}
