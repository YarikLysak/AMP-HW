import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  editCourse,
  addCourse,
  getCourseById,
  getAuthors
} from '../store/courses.actions';
import { AppState } from '../../store/app-state.model';
import { getCourse, getAuthorsList } from '../store/courses.selectors';

import { Course } from '../shared/models/course.model';
import { Author } from '../shared/models/author.model';
import { dateValidator } from '../shared/validators/date-input.validator';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.sass']
})
export class ManageCourseComponent implements OnInit {
  public editCourse$: Observable<Course> = this.store.select(getCourse);
  public editCourseId: number | null = null;
  private breadcrumb = '';
  public authors$: Observable<Author[]> = this.store.select(getAuthorsList);
  public dateFormat = 'dd/MM/yyyy';
  public isFind = false;

  public manageCourseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ]),
    length: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, dateValidator]),
    authors: new FormControl('', [Validators.required])
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private store: Store<AppState>,
    private breadcrumbsService: BreadcrumbsService
  ) {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.breadcrumb = this.route.snapshot.data.breadcrumbs;
    if (paramId) {
      this.editCourseId = +paramId;
      this.store.dispatch(getCourseById({ id: this.editCourseId }));
    } else {
      this.editCourseId = null;
      this.breadcrumbsService.setBreadcrumb(this.breadcrumb);
    }
  }

  ngOnInit() {
    if (this.editCourseId) {
      this.editCourse$.subscribe(course => {
        if (course) {
          this.manageCourseForm.setValue({
            name: course.name,
            description: course.description.trim(),
            length: course.length,
            date: this.datePipe.transform(course.date, this.dateFormat),
            authors: course.authors
          });
        }
      });
    }
  }

  onAuthorSearch(searchAuthorsString: string) {
    if (searchAuthorsString.length !== 0) {
      this.store.dispatch(getAuthors({ searchString: searchAuthorsString }));
      this.authors$.subscribe((authors: Author[]) => {
        console.log(authors);
        this.isFind = authors.length > 0;
      });
    } else {
      this.isFind = false;
    }
  }

  onSubmit() {
    if (this.editCourseId) {
      this.editCourse$.subscribe(course => {
        this.store.dispatch(
          editCourse({ course, courseForm: this.manageCourseForm })
        );
      });
    } else {
      this.store.dispatch(addCourse({ courseForm: this.manageCourseForm }));
    }
    this.manageCourseForm.reset();
  }

  onCancel() {
    this.router.navigate(['/courses']);
    this.manageCourseForm.reset();
  }

  formField(controlName) {
    return this.manageCourseForm.controls[controlName];
  }

  outputError(controlName): string {
    const formFieldErrors = this.formField(controlName).errors;

    for (const errorType in formFieldErrors) {
      if (formFieldErrors.hasOwnProperty(errorType)) {
        return this.checkError(errorType, formFieldErrors[errorType]);
      }
    }
  }

  isError(controlName): boolean {
    const field = this.formField(controlName);
    return field.touched && field.errors ? true : false;
  }

  private checkError(errorType, error?) {
    switch (errorType) {
      case 'required':
        return 'This field is required!';
      case 'maxlength':
        return `Your field should be shorter than ${error.requiredLength} symbols.`;
      case 'validateDate':
        return `Incorrect format! Try ${error.dateFormat}`;
      case 'pattern':
        return `Incorrect format! Try ${error}`;
      default:
        return '';
    }
  }
}
