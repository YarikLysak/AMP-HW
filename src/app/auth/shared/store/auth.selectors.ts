import { createSelector } from '@ngrx/store';

import { AppState } from '../../../store/app-state.model';
import { AuthState } from './auth-state.model';

export const getUser = createSelector(
  (state: AppState) => state.authFeature,
  (state: AuthState) => state.user
);

export const getIsAuth = createSelector(
  (state: AppState) => state.authFeature,
  (state: AuthState) => state.isAuth
);

export const getError = createSelector(
  (state: AppState) => state.authFeature,
  (state: AuthState) => state.error
);
