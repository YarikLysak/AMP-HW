import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../shared/models/course.model';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';
import {
  editCourseAction,
  addCourseAction,
  getCourseByIdAction
} from '../../shared/store/courses.actions';
import { CoursesState } from '../../shared/models/courses-list-state.model';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.sass']
})
export class ManageCourseComponent implements OnInit {
  public editCourse$: Observable<Course> = this.store.pipe(select('course'));
  public editCourseId: number | null = null;
  private breadcrumb = '';

  public manageCourseForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
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
    private store: Store<CoursesState>,
    private breadcrumbsService: BreadcrumbsService
  ) {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.breadcrumb = this.route.snapshot.data.breadcrumbs;
    if (paramId) {
      this.editCourseId = +paramId;
      this.store.dispatch(getCourseByIdAction({ id: this.editCourseId }));
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

  onSubmit() {
    let newCourse: Course;
    if (this.editCourseId) {
      this.editCourse$.subscribe(course => {
        newCourse = {
          ...course,
          ...this.manageCourseForm.value,
          date: new Date(this.manageCourseForm.controls.date.value)
        };
        this.store.dispatch(editCourseAction({ course: newCourse }));
      });
    } else {
      newCourse = {
        ...this.manageCourseForm.value,
        date: new Date(this.manageCourseForm.controls.date.value),
        isTopRated: false
      };
      this.store.dispatch(addCourseAction({ course: newCourse }));
    }
    this.manageCourseForm.reset();
  }

  onCancel() {
    this.router.navigate(['/courses']);
    this.manageCourseForm.reset();
  }
}
