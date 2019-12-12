import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, filter, debounceTime } from 'rxjs/operators';

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
    this.searchField.valueChanges
      .pipe(
        debounceTime(500),
        filter(searchFieldData => searchFieldData.length > 2),
        debounceTime(800),
        map(data => data)
      )
      .subscribe(data => this.searchString.emit(data));
  }
}
