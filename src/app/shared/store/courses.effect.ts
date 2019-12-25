import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { CoursesService } from '../services/courses/courses.service';
import { Course } from '../models/course.model';
import {
  getCoursesAction,
  deleteCourseAction,
  getCoursesSuccessAction,
  getSearchedAction
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
    private coursesService: CoursesService
  ) {}
}
