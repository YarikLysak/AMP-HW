import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Login } from '../../models/login.model';

export const login = createAction(
  '[AUTH] Login',
  props<{ loginData: Login }>()
);
export const loginSuccess = createAction(
  '[AUTH] Login Success',
  props<{ user: User; isAuth: boolean }>()
);
export const setIsAuth = createAction(
  '[AUTH] Set isAuth',
  props<{ isAuth: boolean }>()
);
export const loginErrors = createAction(
  '[AUTH] Login Error',
  props<{ error: string }>()
);

export const logout = createAction(
  '[AUTH] Logout',
  props<{ isAuth: boolean }>()
);