import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { AuthState } from '../../store/auth-state.model';
import { loginSuccess } from '../../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser = new BehaviorSubject<User>(null);
  private USERS_URL = 'http://localhost:3004/users';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store<AuthState>
  ) {
    this.loginByToken();
  }

  login(loginData: Login): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${this.USERS_URL}/?login=${loginData.login}`
    );
  }

  private loginByToken() {
    const fakeToken = localStorage.getItem('user-token');
    if (fakeToken) {
      this.httpClient
        .get(`${this.USERS_URL}/?fakeToken=${fakeToken}`)
        .subscribe(([user]: User[]) => {
          if (user) {
            this.store.dispatch(loginSuccess({ user, isAuth: true }));
          }
        });
    }
  }

  logout() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
