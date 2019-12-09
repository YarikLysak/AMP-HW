import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoursesService } from '../../shared/services/courses/courses.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  public searchField = new FormControl('');

  constructor(private courseService: CoursesService) {}

  searchCourses() {
    this.courseService.searchCourses(this.searchField.value);
  }
}
