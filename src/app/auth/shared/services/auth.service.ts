import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SpinnerService } from '../../../shared/services/spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);
  public currentUser = new BehaviorSubject<User>(null);
  private USERS_URL = 'http://localhost:3004/users';

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private spinner: SpinnerService
  ) {
    this.loginByToken();
  }

  login(authData): void {
    this.spinner.startStinner();
    this.httpClient
      .get(`${this.USERS_URL}/?login=${authData.login}`)
      .subscribe(([user]: User[]) => {
        if (!user) {
          console.log('no such user!!!');
          this.isAuth.next(false);
          this.spinner.stopSpinner();
          return;
        }

        const isPasswordCorrect = user.password === authData.password;
        this.isAuth.next(isPasswordCorrect);
        if (!isPasswordCorrect) {
          console.log('wrong password!');
          this.spinner.stopSpinner();
          return;
        }

        localStorage.setItem('user-token', user.fakeToken);
        this.currentUser.next(user);
        this.spinner.stopSpinner();
        this.router.navigate(['/courses']);
      });
  }

  private loginByToken() {
    this.spinner.startStinner();
    const fakeToken = localStorage.getItem('user-token');
    if (fakeToken) {
      this.httpClient
        .get(`${this.USERS_URL}/?fakeToken=${fakeToken}`)
        .subscribe(([user]: User[]) => {
          if (user) {
            this.currentUser.next(user);
            this.isAuth.next(true);
            this.spinner.stopSpinner();
            this.router.navigate(['/courses']);
          }
        });
    }
  }

  logout() {
    localStorage.removeItem('user-token');
    this.currentUser.next(null);
    this.isAuth.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  getUserInfo(): Observable<User> {
    return this.currentUser.asObservable();
  }
}
