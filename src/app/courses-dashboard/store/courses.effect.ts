import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { CoursesService } from '../shared/services/courses.service';
import { AuthorsService } from '../shared/services/authors.service';
import { Course } from '../shared/models/course.model';
import { Author } from '../shared/models/author.model';
import {
  getCourses,
  deleteCourse,
  getCoursesSuccess,
  getSearched,
  getCourseById,
  getCourseByIdSuccess,
  addCourse,
  editCourse,
  manageCourseSuccess,
  getAuthors,
  getAuthorsSuccess
} from './courses.actions';

@Injectable()
export class CoursesListEffects {
  getAuhtors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuthors),
      mergeMap(({ searchString }) =>
        this.authorsService
          .getAuthors(searchString)
          .pipe(map((authors: Author[]) => getAuthorsSuccess({ authors })))
      )
    )
  );

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
      mergeMap(({ courseForm }) => {
        const newCourse = {
          ...courseForm.value,
          date: new Date(courseForm.controls.date.value),
          isTopRated: false
        };
        return this.coursesService.addCourse(newCourse).pipe(
          map(() => {
            this.router.navigate(['/courses']);
            return manageCourseSuccess({ course: newCourse });
          })
        );
      })
    )
  );
  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCourse),
      mergeMap(({ course, courseForm }) => {
        const updatedCourse = {
          ...course,
          ...courseForm.value,
          date: new Date(courseForm.controls.date.value)
        };
        return this.coursesService.updateCourse(updatedCourse).pipe(
          map(() => {
            this.router.navigate(['/courses']);
            return manageCourseSuccess({ course: updatedCourse });
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
    private authorsService: AuthorsService,
    private router: Router
  ) {}
}
