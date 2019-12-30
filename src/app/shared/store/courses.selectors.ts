import { createSelector } from '@ngrx/store';

import { AppState } from '../../store/app-state.model';
import { CoursesState } from './courses-state.model';

export const getCoursesList = createSelector(
  (state: AppState) => state.coursesFeature,
  (state: CoursesState) => state.coursesList
);

export const getCourse = createSelector(
  (state: AppState) => state.coursesFeature,
  (state: CoursesState) => state.course
);
