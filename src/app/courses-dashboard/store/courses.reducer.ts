import { on, createReducer } from '@ngrx/store';

import {
  getCourseByIdSuccess,
  getCoursesSuccess,
  getAuthorsSuccess,
  clearAuthorsSuccess
} from './courses.actions';

const initialState = {
  authors: [],
  course: null,
  coursesList: []
};

const reducer = createReducer(
  initialState,
  on(getCourseByIdSuccess, (state, { course }) => {
    return { ...state, course: { ...course } };
  }),
  on(getCoursesSuccess, (state, { courses }) => {
    return { ...state, coursesList: [...courses] };
  }),

  on(getAuthorsSuccess, (state, { authors }) => {
    return { ...state, authors: [...authors] };
  }),
  on(clearAuthorsSuccess, (state, { authors }) => {
    return { ...state, authors };
  })
);

export function courseReducer(state, action) {
  return reducer(state, action);
}
