import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, switchMap } from 'rxjs/operators';

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
  cancelManageCourse,
  getAuthors,
  getAuthorsSuccess,
  clearAuthors,
  clearAuthorsSuccess
} from './courses.actions';

@Injectable()
export class CoursesListEffects {
  getAuhtors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAuthors),
      switchMap(({ searchString }) =>
        this.authorsService
          .getAuthors(searchString)
          .pipe(map((authors: Author[]) => getAuthorsSuccess({ authors })))
      )
    )
  );

  clearAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clearAuthors),
      map(() => clearAuthorsSuccess({ authors: [] }))
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
      switchMap(({ searchString, count }) =>
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
        const dateArray = courseForm.date.split('/');
        const newCourse = {
          ...courseForm,
          date: new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`),
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
        const dateArray = courseForm.date.split('/');
        const updatedCourse = {
          ...course,
          ...courseForm,
          date: new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`)
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
  cancelManageCourse$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(cancelManageCourse),
        switchMap(() => this.router.navigateByUrl('/courses'))
      ),
    { dispatch: false }
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
