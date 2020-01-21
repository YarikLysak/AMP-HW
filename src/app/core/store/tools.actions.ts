import { createAction, props } from '@ngrx/store';

export const startSpinner = createAction(
  '[SPINNER] Start Spinner',
  props<{ isSpin: boolean }>()
);
export const startSpinnerSuccess = createAction(
  '[SPINNER] Start Spinner Success',
  props<{ isSpin: boolean }>()
);

export const stopSpinner = createAction(
  '[SPINNER] Stop Spinner',
  props<{ isSpin: boolean }>()
);

export const stopSpinnerSuccess = createAction(
  '[SPINNER] Stop Spinner Success',
  props<{ isSpin: boolean }>()
);
