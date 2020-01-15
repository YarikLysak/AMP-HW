import { Component, forwardRef, OnDestroy } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

import { Author } from '../../shared/models/author.model';
import { AppState } from '../../../store/app-state.model';
import { getAuthors, clearAuthors } from '../../store/courses.actions';
import { getAuthorsList } from '../../store/courses.selectors';

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
  ]
})
export class AuthorsListComponent implements ControlValueAccessor, OnDestroy {
  public authorsList: Author[] = [];
  public suggesterStatus = false;
  public searchedAuthorsField = new FormControl('');
  public searchedAuthors$: Observable<Author[]> = this.store.select(
    getAuthorsList
  );

  private propagateChange = (_: any) => {};

  constructor(private store: Store<AppState>) {}

  onSearhcedAuthorSelect(author: Author) {
    if (!this.authorsList.find(({ id }) => id === author.id)) {
      this.authorsList = [...this.authorsList, author];
      this.propagateChange(this.authorsList);
    }
  }

  onSearchAuthors() {
    this.store.dispatch(clearAuthors());
    this.searchedAuthorsField.valueChanges
      .pipe(
        debounceTime(750),
        filter(searchStr => searchStr.length !== 0)
      )
      .subscribe(searchString =>
        this.store.dispatch(getAuthors({ searchString }))
      );
  }

  suggesterTrigger() {
    this.suggesterStatus = !this.suggesterStatus;
  }

  deleteAuthor(e, needToDeleteId: number) {
    e.stopPropagation();

    this.authorsList = [...this.authorsList].filter(
      ({ id }) => id !== needToDeleteId
    );
    this.propagateChange(this.authorsList);
  }

  writeValue(value: any) {
    if (value) {
      this.authorsList = [...value];
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {}

  ngOnDestroy() {
    this.store.dispatch(clearAuthors());
  }
}
