import { on, createReducer } from '@ngrx/store';

import { Course } from '../models/course.model';
import {
  getCoursesSuccessAction,
  addCourseSuccessAction
} from './courses.actions';

export const initialState: Course[] = [];

const courseListSubReduser = createReducer(
  initialState,
  on(getCoursesSuccessAction, (state, action) => {
    return [...action.courses];
  }),

  on(addCourseSuccessAction, (state, action) => {
    return [...state, { ...action.course }];
  })
);

export function coursesListReducer(state, action) {
  return courseListSubReduser(state, action);
}
