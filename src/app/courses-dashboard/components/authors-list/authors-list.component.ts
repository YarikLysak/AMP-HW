import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
} from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsListComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthorsListComponent {
  public authorsList: Author[] = [];
  public suggesterStatus = false;

  onChange = (authors: Author[]) => {
    console.log('onChange', authors);
  };

  writeValue(value: any) {
    this.authorsList = value;
    console.log('WV', this.authorsList);
    this.onChange(this.authorsList);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    // console.log('RT', fn);
  }


  // @Input() parentForm: FormGroup;
  // @Input() isError: boolean;
  // @Input() isFind: boolean;
  // @Input() outputError: string;

  // @Input() searchedAuthors: Author[];

  // @Output() searchAuthorsString = new EventEmitter<string>();


  // ngOnInit() {
  //   console.log(authors);
  //   console.log(this.parentForm.controls.authors);
  // }

  // searchAuthors() {
  //   this.parentForm.controls.authors.valueChanges
  //     .pipe(
  //       debounceTime(750),
  //       filter(
  //         searchString => searchString.length > 1 || searchString.length === 0
  //       ),
  //     )
  //     .subscribe(searchString => this.searchAuthorsString.emit(searchString));
  // }

  // onSearhcedAuthorSelect(searchedAuthor: Author) {
  //   console.log(searchedAuthor);
  // }

  openSuggester() {
    this.suggesterStatus = !this.suggesterStatus;
  }

  deleteAuthor(needToDeleteAuthor: Author) {
    this.authorsList = [...this.authorsList].filter(({ id }) => id !== needToDeleteAuthor.id);
  }
}
