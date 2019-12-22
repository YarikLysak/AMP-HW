import { createReducer, on, Action, createAction } from '@ngrx/store';

export const initialState = 0;

const authReducer = createReducer(
  initialState,
  on(createAction('SPANISH'), state => {
    console.log(state, 'spanish');
    return state;
  }),
  on(createAction('FRENCH'), state => {
    console.log(state, 'french');
    return state;
  })
);
export function simpleReducer(state, action: Action) {
  return authReducer;
}
