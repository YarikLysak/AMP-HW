import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsListComponent {
  @Input() parentForm: FormGroup;
  @Input() isError: boolean;
  @Input() outputError: string;

  @Output() searchAuthorsString = new EventEmitter<string>();

  searchAuthors() {
    this.parentForm.controls.authors.valueChanges
      .pipe(
        debounceTime(750),
        filter(
          searchString => searchString.length > 1 || searchString.length === 0
        ),
        map(searchString => searchString)
      )
      .subscribe(searchString => this.searchAuthorsString.emit(searchString));
  }
}
