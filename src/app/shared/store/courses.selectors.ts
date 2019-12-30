import { createSelector } from '@ngrx/store';

import { CoursesState } from './courses-state.model';

export const getCoursesList = createSelector(
  (state: CoursesState) => state,
  (state: CoursesState) => state.coursesList
);

export const getCourse = createSelector(
  (state: CoursesState) => state,
  (state: CoursesState) => state.course
);
