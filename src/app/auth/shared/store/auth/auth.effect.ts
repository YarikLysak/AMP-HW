import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { login, loginSuccess, logout, setIsAuth } from './auth.actions';
import { User } from '../../models/user.model';
import { errorsAction } from '../errors/errors.actions';

const onGetUser = (user: User, { password }) => {
  if (!user) {
    console.log('no such user!!!');
    return errorsAction({ error: 'login' });
  } else if (user.password !== password) {
    console.log('wrong password!');
    return errorsAction({ error: 'password' });
  } else {
    return loginSuccess({ user, isAuth: true });
  }
};

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          map(([user]: User[]) => {
            console.log(user);
            return onGetUser(user, loginData);
          })
        )
      )
    )
  );

  loggedInAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      map(({ user, isAuth }) => {
        localStorage.setItem('user-token', user.fakeToken);
        this.router.navigate(['/courses']);
        return setIsAuth({ isAuth });
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      map(({ isAuth }) => {
        this.auth.logout();
        return setIsAuth({ isAuth });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) {}
}
