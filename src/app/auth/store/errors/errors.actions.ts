import { createAction, props } from '@ngrx/store';

export const errorsAction = createAction(
  '[AUTH] Error',
  props<{ error: string }>()
);
