import { createSelector } from '@ngrx/store';

import { AuthState } from './auth-state.model';

export const getUser = createSelector(
  (state: AuthState) => state,
  (state: AuthState) => state.user
);

export const getIsAuth = createSelector(
  (state: AuthState) => state,
  (state: AuthState) => state.isAuth
);

export const getError = createSelector(
  (state: AuthState) => state,
  (state: AuthState) => state.error
);
