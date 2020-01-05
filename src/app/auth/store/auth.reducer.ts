import { on, createReducer } from '@ngrx/store';
import { loginSuccess, setIsAuth, errorsAction } from './auth.actions';

const initialState = {
  user: null,
  isAuth: false,
  error: ''
};

const reducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => {
    return { ...state.user, user: { ...user } };
  }),

  on(setIsAuth, (state, { isAuth }) => {
    return { ...state, isAuth };
  }),

  on(errorsAction, (state, { error }) => {
    return { ...state, error };
  })
);

export function authReducer(state, action) {
  return reducer(state, action);
}
