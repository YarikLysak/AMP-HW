import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { CoursesService } from '../services/courses/courses.service';
import { Course } from '../models/course.model';
import {
  getCourses,
  deleteCourse,
  getCoursesSuccess,
  getSearched,
  getCourseById,
  getCourseByIdSuccess,
  addCourse,
  editCourse,
  manageCourseSuccess
} from './courses.actions';

@Injectable()
export class CoursesListEffects {
  loadCoursesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourses),
      mergeMap(({ count }) =>
        this.coursesService
          .getCourses(count)
          .pipe(map((courses: Course[]) => getCoursesSuccess({ courses })))
      )
    )
  );

  getSearched$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSearched),
      mergeMap(({ searchString, count }) =>
        this.coursesService
          .searchCourses(searchString, count)
          .pipe(map((courses: Course[]) => getCoursesSuccess({ courses })))
      )
    )
  );

  getCourseById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourseById),
      mergeMap(({ id }) =>
        this.coursesService
          .getCourseById(id)
          .pipe(map((course: Course) => getCourseByIdSuccess({ course })))
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourse),
      mergeMap(({ course }) =>
        this.coursesService.addCourse(course).pipe(
          map(() => {
            this.router.navigate(['/courses']);
            return manageCourseSuccess({ course });
          })
        )
      )
    )
  );
  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCourse),
      mergeMap(({ course }) => {
        console.log(course);
        return this.coursesService.updateCourse(course).pipe(
          map(() => {
            this.router.navigate(['/courses']);
            return manageCourseSuccess({ course });
          })
        );
      })
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourse),
      mergeMap(({ id }) =>
        this.coursesService
          .removeCourse(id)
          .pipe(map(() => getCourses({ count: 3 })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
