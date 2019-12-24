import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course.model';

export const getCoursesAction = createAction(
  '[COURSES] Get Courses',
  props<{ count: number }>()
);
export const getCoursesSuccessAction = createAction(
  '[COURSES] Get Courses Success',
  props<{ courses: Course[] }>()
);

export const addCourseAction = createAction('[COURSES] Add Course');
export const addCourseSuccessAction = createAction(
  '[COURSES] Add Course Success',
  props<{ course: Course }>()
);

export const deleteCourseAction = createAction(
  '[COURSES] Delete Course',
  props<{ id: number }>()
);
