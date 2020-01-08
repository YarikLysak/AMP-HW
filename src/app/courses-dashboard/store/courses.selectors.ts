import { createSelector } from '@ngrx/store';

import { AppState } from '../../store/app-state.model';
import { CoursesState } from './courses-state.model';

const coursesFeature = (state: AppState) => state.coursesFeature;

export const getCoursesList = createSelector(
  coursesFeature,
  (state: CoursesState) => state.coursesList
);

export const getCourse = createSelector(
  coursesFeature,
  (state: CoursesState) => state.course
);
