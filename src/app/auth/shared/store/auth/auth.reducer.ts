import { on, createReducer } from '@ngrx/store';
import { User } from '../../models/user.model';
import { loginSuccessAction } from './auth.actions';

export const initialState: User = null;

const authSubReducer = createReducer(
  initialState,
  on(loginSuccessAction, (state, action) => {
    return { ...action.user };
  })
);

export function authReducer(state, action) {
  return authSubReducer(state, action);
}
