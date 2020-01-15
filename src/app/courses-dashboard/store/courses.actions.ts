import { createAction, props } from '@ngrx/store';
import { Course } from '../shared/models/course.model';
import { Author } from '../shared/models/author.model';

export const getAuthors = createAction(
  '[COURSES] Get Authors',
  props<{ searchString: string }>()
);
export const getAuthorsSuccess = createAction(
  '[COURSES] Get Authors Success',
  props<{ authors: Author[] }>()
);
export const clearAuthors = createAction('[COURSES] Clear Authors');
export const clearAuthorsSuccess = createAction(
  '[COURSES] Clear Authors Success',
  props<{ authors: Author[] }>()
);

export const getCourses = createAction(
  '[COURSES] Get Courses',
  props<{ count: number }>()
);
export const getCoursesSuccess = createAction(
  '[COURSES] Get Courses Success',
  props<{ courses: Course[] }>()
);

export const getSearched = createAction(
  '[COURSES] Get Searched Courses',
  props<{ searchString: string; count: number }>()
);

export const getCourseById = createAction(
  '[COURSES] Get Course By Id',
  props<{ id: number }>()
);
export const getCourseByIdSuccess = createAction(
  '[COURSES] Get Course By Id Success',
  props<{ course: Course }>()
);

export const addCourse = createAction(
  '[COURSES] Add Course',
  props<{ courseForm }>()
);
export const editCourse = createAction(
  '[COURSES] Edit Course',
  props<{ course: Course; courseForm }>()
);
export const manageCourseSuccess = createAction(
  '[COURSES] Add/Edit Course Success',
  props<{ course: Course }>()
);

export const deleteCourse = createAction(
  '[COURSES] Delete Course',
  props<{ id: number }>()
);
