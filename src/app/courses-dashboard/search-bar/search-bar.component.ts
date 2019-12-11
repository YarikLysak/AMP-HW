import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { CoursesService } from '../../shared/services/courses/courses.service';
import { Course } from '../../shared/models/course.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  public searchField = new FormControl('');
  @Output() searchString = new EventEmitter<string>();

  searchCourses() {
    this.searchString.emit(this.searchField.value);
  }
}
