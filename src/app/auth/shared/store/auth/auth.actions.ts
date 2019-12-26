import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Login } from '../../models/login.model';

export const loginAction = createAction(
  '[AUTH] Login',
  props<{ loginData: Login }>()
);
export const loginSuccessAction = createAction(
  '[AUTH] Login Success',
  props<{ user: User; isAuth: boolean }>()
);
export const setIsAuthAction = createAction(
  '[AUTH] Set isAuth',
  props<{ isAuth: boolean }>()
);
export const loginErrorsAction = createAction(
  '[AUTH] Login Error',
  props<{ error: string }>()
);

export const logoutAction = createAction(
  '[AUTH] Logout',
  props<{ isAuth: boolean }>()
);
