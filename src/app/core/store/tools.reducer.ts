import { createReducer, on } from '@ngrx/store';
import {
  startSpinnerSuccess,
  stopSpinnerSuccess,
  setBreadcrumbsSuccess
} from './tools.actions';

const initialState = {
  isSpin: true,
  breadcrumbs: []
};

const reducer = createReducer(
  initialState,
  on(startSpinnerSuccess, (state, { isSpin }) => {
    return { ...state, isSpin };
  }),
  on(stopSpinnerSuccess, (state, { isSpin }) => {
    return { ...state, isSpin };
  }),
  on(setBreadcrumbsSuccess, (state, { breadcrumb }) => {
    let breadcrumbs = [...state.breadcrumbs];
    const breadcrumbIndex = breadcrumbs.indexOf(breadcrumb);
    const isInArray = breadcrumbIndex !== -1;
    const isFirstInArray = breadcrumbIndex === 0;

    if (!breadcrumb) {
      breadcrumbs = [];
    } else if (isInArray && !isFirstInArray) {
      breadcrumbs = breadcrumbs.slice(breadcrumbIndex);
    } else if (!isFirstInArray) {
      breadcrumbs = [breadcrumb];
    } else {
      breadcrumbs.push(breadcrumb);
    }
    return { ...state, breadcrumbs };
  })
);

export function toolsReducer(state, action) {
  return reducer(state, action);
}
