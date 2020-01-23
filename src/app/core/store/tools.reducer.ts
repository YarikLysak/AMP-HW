import { createReducer, on } from '@ngrx/store';
import { startSpinnerSuccess, stopSpinnerSuccess } from './tools.actions';

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
  })
);

export function toolsReducer(state, action) {
  return reducer(state, action);
}
