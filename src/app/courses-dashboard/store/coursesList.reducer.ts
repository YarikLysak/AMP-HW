import { on, createReducer } from '@ngrx/store';

import { Course } from '../shared/models/course.model';
import { getCoursesSuccess } from './courses.actions';

export const initialState: Course[] = [];

const courseListSubReduser = createReducer(
  initialState,
  on(getCoursesSuccess, (state, action) => {
    return [...action.courses];
  })
);

export function coursesListReducer(state, action) {
  return courseListSubReduser(state, action);
}
