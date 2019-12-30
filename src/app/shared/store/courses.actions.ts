import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course.model';

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
  props<{ course: Course }>()
);
export const editCourse = createAction(
  '[COURSES] Edit Course',
  props<{ course: Course }>()
);

export const manageCourseSuccess = createAction(
  '[COURSES] Add/Edit Course Success',
  props<{ course: Course }>()
);

export const deleteCourse = createAction(
  '[COURSES] Delete Course',
  props<{ id: number }>()
);
