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

export const getSearchedAction = createAction(
  '[COURSES] Get Searched Courses',
  props<{ searchString: string; count: number }>()
);

export const getCourseByIdAction = createAction(
  '[COURSES] Get Course By Id',
  props<{ id: number }>()
);
export const getCourseByIdSuccessAction = createAction(
  '[COURSES] Get Course By Id Success',
  props<{ course: Course }>()
);

export const addCourseAction = createAction(
  '[COURSES] Add Course',
  props<{ course: Course }>()
);
export const editCourseAction = createAction(
  '[COURSES] Edit Course',
  props<{ course: Course }>()
);

export const manageCourseSuccessAction = createAction(
  '[COURSES] Add/Edit Course Success',
  props<{ course: Course }>()
);

export const deleteCourseAction = createAction(
  '[COURSES] Delete Course',
  props<{ id: number }>()
);
