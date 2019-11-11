import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  public searchField = new FormControl('');

  constructor(private courceService: CoursesService) {}

  searchCourse() {
    // this.courceService.filterCourses(this.searchField.value);
    console.log(this.searchField.value, '/searched data');
  }
}
