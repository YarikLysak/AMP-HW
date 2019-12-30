import { on, createReducer } from '@ngrx/store';

import { Course } from '../models/course.model';
import { getCourseByIdSuccess } from './courses.actions';

export const initialState: Course | null = null;

const courseSubReducer = createReducer(
  initialState,
  on(getCourseByIdSuccess, (state, action) => {
    return { ...action.course };
  })
);

export function courseReducer(state, action) {
  return courseSubReducer(state, action);
}
