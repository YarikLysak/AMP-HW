import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../shared/models/course.model';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';
import { editCourse, addCourse, getCourseById } from '../store/courses.actions';
import { AppState } from '../../store/app-state.model';
import { getCourse } from '../store/courses.selectors';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.sass']
})
export class ManageCourseComponent implements OnInit {
  public editCourse$: Observable<Course> = this.store.select(getCourse);
  public editCourseId: number | null = null;
  private breadcrumb = '';

  public manageCourseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ]),
    length: new FormControl('', [Validators.required]),
    date: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      )
    ]),
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
            date: this.datePipe.transform(course.date, 'd MMM, yyyy'),
            authors: course.authors
          });
        }
      });
    }
  }

  formField(controlName) {
    return this.manageCourseForm.controls[controlName];
  }

  outputError(controlName): string {
    return this.formField(controlName).errors.required
      ? this.checkError('required')
      : this.checkError(
          'maxLength',
          this.formField(controlName).errors.maxlength.requiredLength
        );
  }

  isError(controlName) {
    return (
      this.formField(controlName).touched && this.formField(controlName).errors
    );
  }

  private checkError(type, error?) {
    switch (type) {
      case 'required':
        return 'This field is required!';
      case 'maxLength':
        return `Your field should be shorter than ${error} symbols.`;
      default:
        return '';
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
}
