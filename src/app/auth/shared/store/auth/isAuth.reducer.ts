import { on, createReducer } from '@ngrx/store';
import { setIsAuth } from './auth.actions';

export const initialState = false;

const isAuthSubReducer = createReducer(
  initialState,
  on(setIsAuth, (state, action) => {
    return action.isAuth;
  })
);

export function isAuthReducer(state, action) {
  return isAuthSubReducer(state, action);
}
