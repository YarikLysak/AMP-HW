import { on, createReducer } from '@ngrx/store';

import { Course } from '../models/course.model';
import { getCourseByIdSuccessAction } from './courses.actions';

export const initialState: Course | null = null;

const courseSubReduser = createReducer(
  initialState,
  on(getCourseByIdSuccessAction, (state, action) => {
    return { ...action.course };
  })
);

export function courseReducer(state, action) {
  return courseSubReduser(state, action);
}
