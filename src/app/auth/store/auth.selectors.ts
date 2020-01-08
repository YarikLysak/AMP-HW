import { createSelector } from '@ngrx/store';

import { AppState } from '../../store/app-state.model';
import { AuthState } from './auth-state.model';

const authFeature = (state: AppState) => state.authFeature;

export const getUser = createSelector(
  authFeature,
  (state: AuthState) => state.user
);

export const getIsAuth = createSelector(
  authFeature,
  (state: AuthState) => state.isAuth
);

export const getError = createSelector(
  authFeature,
  (state: AuthState) => state.error
);
