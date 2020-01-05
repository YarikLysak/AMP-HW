import { on, createReducer } from '@ngrx/store';
import { User } from '../../shared/models/user.model';
import { loginSuccess } from './auth.actions';

export const initialState: User = null;

const authSubReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return { ...action.user };
  })
);

export function authReducer(state, action) {
  return authSubReducer(state, action);
}
