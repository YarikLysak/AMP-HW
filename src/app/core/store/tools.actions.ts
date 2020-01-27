import { createAction, props } from '@ngrx/store';

export const startSpinner = createAction('[SPINNER] Start Spinner');
export const startSpinnerSuccess = createAction(
  '[SPINNER] Start Spinner Success',
  props<{ isSpin: boolean }>()
);

export const stopSpinner = createAction('[SPINNER] Stop Spinner');
export const stopSpinnerSuccess = createAction(
  '[SPINNER] Stop Spinner Success',
  props<{ isSpin: boolean }>()
);

export const setBreadcrumbs = createAction(
  '[BREADCRUMBS] Set Breadcrumbs',
  props<{ breadcrumb: string }>()
);
export const clearBreadcrumbs = createAction('[BREADCRUMBS] Clear Breadcrumbs');
export const setBreadcrumbsSuccess = createAction(
  '[BREADCRUMBS] Set Breadcrumbs Success',
  props<{ breadcrumb: string }>()
);
