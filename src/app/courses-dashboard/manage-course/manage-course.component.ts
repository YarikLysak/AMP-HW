import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  editCourse,
  addCourse,
  getCourseById,
  clearAuthors,
  cancelManageCourse
} from '../store/courses.actions';
import { AppState } from '../../store/app-state.model';
import { getCourse } from '../store/courses.selectors';

import { Course } from '../shared/models/course.model';
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
  public dateFormat = 'dd/MM/yyyy';
  private breadcrumb = '';

  public manageCourseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    length: ['', [Validators.required]],
    date: ['', [Validators.required, dateValidator]],
    authors: [[], [Validators.required]]
  });

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private store: Store<AppState>,
    private breadcrumbsService: BreadcrumbsService,
    private fb: FormBuilder
  ) {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.breadcrumb = this.route.snapshot.data.breadcrumbs;

    if (paramId) {
      this.editCourseId = +paramId;
      this.store.dispatch(getCourseById({ id: this.editCourseId }));
    } else {
      this.breadcrumbsService.setBreadcrumb(this.breadcrumb);
    }
  }

  ngOnInit() {
    this.editCourse$.subscribe(course => {
      if (course) {
        this.manageCourseForm.patchValue({
          name: course.name,
          description: course.description.trim(),
          length: course.length,
          date: this.datePipe.transform(course.date, this.dateFormat),
          authors: course.authors
        });
      }
    });
  }

  get formControls() {
    return this.manageCourseForm.controls;
  }
  formField(controlName) {
    return this.formControls[controlName];
  }

  onSubmit() {
    const courseForm = { ...this.manageCourseForm.value };

    if (this.editCourseId) {
      this.editCourse$.subscribe(course => {
        this.store.dispatch(editCourse({ course, courseForm }));
      });
    } else {
      this.store.dispatch(addCourse({ courseForm }));
    }
    this.manageCourseForm.reset();
    this.store.dispatch(clearAuthors());
  }

  onCancel() {
    this.store.dispatch(cancelManageCourse());
    this.manageCourseForm.reset();
  }
}
