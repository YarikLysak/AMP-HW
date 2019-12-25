import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Login } from '../models/login.model';
import { Store } from '@ngrx/store';
import { AuthState } from '../models/auth-state.model';
import { loginSuccessAction } from '../store/auth/auth.actions';

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
            this.store.dispatch(loginSuccessAction({ user, isAuth: true }));
          }
        });
    }
  }

  logout() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
