import { on, createReducer } from '@ngrx/store';

import { getCourseByIdSuccess, getCoursesSuccess } from './courses.actions';

const initialState = {
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
  })
);

export function courseReducer(state, action) {
  return reducer(state, action);
}
