import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import {
  loginAction,
  loginSuccessAction,
  logoutAction,
  setIsAuthAction
} from './auth.actions';
import { User } from '../../models/user.model';
import { errorsAction } from '../errors/errors.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      mergeMap(({ loginData }) =>
        this.auth.login(loginData).pipe(
          map(([user]: User[]) => {
            console.log(user);
            if (!user) {
              console.log('no such user!!!');
              return errorsAction({ error: 'login' });
            } else if (user.password !== loginData.password) {
              console.log('wrong password!');
              return errorsAction({ error: 'password' });
            } else {
              return loginSuccessAction({ user, isAuth: true });
            }
          })
        )
      )
    )
  );

  loggedInAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(({ user }) => {
        localStorage.setItem('user-token', user.fakeToken);
        this.router.navigate(['/courses']);
      })
    )
  );

  setIsAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessAction),
      map(({ isAuth }) => setIsAuthAction({ isAuth }))
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.auth.logout();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private auth: AuthService,
    private router: Router
  ) {}
}
