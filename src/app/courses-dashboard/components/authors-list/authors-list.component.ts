import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsListComponent {
  public suggesterStatus = false;

  @Input() parentForm: FormGroup;
  @Input() isError: boolean;
  @Input() isFind: boolean;
  @Input() outputError: string;
  @Input() authors$: Observable<Author[]>;

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

  onAuthorSelect(author: Author) {
    console.log(author);
  }

  openSuggester() {
    this.suggesterStatus = !this.suggesterStatus;
  }
}
