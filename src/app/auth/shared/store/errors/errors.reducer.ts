import { on, createReducer } from '@ngrx/store';
import { errorsAction } from './errors.actions';

export const initialState = '';

const errorsSubReducer = createReducer(
  initialState,
  on(errorsAction, (state, action) => {
    return action.error;
  })
);

export function errorsReducer(state, action) {
  return errorsSubReducer(state, action);
}
