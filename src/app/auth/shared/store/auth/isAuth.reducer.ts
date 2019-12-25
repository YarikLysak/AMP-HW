import { on, createReducer } from '@ngrx/store';
import { setIsAuthAction } from './auth.actions';

export const initialState = false;

const isAuthSubReducer = createReducer(
  initialState,
  on(setIsAuthAction, (state, action) => {
    return action.isAuth;
  })
);

export function isAuthReducer(state, action) {
  return isAuthSubReducer(state, action);
}
