import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { CoursesService } from '../services/courses/courses.service';
import { Course } from '../models/course.model';
import {
  getCoursesAction,
  deleteCourseAction,
  getCoursesSuccessAction,
  getSearchedAction,
  getCourseByIdAction,
  getCourseByIdSuccessAction,
  addCourseAction,
  editCourseAction,
  manageCourseSuccessAction
} from './courses.actions';

@Injectable()
export class CoursesListEffects {
  loadCoursesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoursesAction),
      mergeMap(({ count }) =>
        this.coursesService
          .getCourses(count)
          .pipe(
            map((courses: Course[]) => getCoursesSuccessAction({ courses }))
          )
      )
    )
  );

  getSearched$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSearchedAction),
      mergeMap(({ searchString, count }) =>
        this.coursesService
          .searchCourses(searchString, count)
          .pipe(
            map((courses: Course[]) => getCoursesSuccessAction({ courses }))
          )
      )
    )
  );

  getCourseById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourseByIdAction),
      mergeMap(({ id }) =>
        this.coursesService
          .getCourseById(id)
          .pipe(map((course: Course) => getCourseByIdSuccessAction({ course })))
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourseAction),
      mergeMap(({ course }) =>
        this.coursesService.addCourse(course).pipe(
          map(() => {
            this.router.navigate(['/courses']);
            return manageCourseSuccessAction({ course });
          })
        )
      )
    )
  );
  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCourseAction),
      mergeMap(({ course }) => {
        console.log(course);
        return this.coursesService.updateCourse(course).pipe(
          map(() => {
            this.router.navigate(['/courses']);
            return manageCourseSuccessAction({ course });
          })
        );
      })
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourseAction),
      mergeMap(({ id }) =>
        this.coursesService
          .removeCourse(id)
          .pipe(map(() => getCoursesAction({ count: 3 })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
