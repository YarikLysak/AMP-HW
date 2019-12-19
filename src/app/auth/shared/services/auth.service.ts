import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { LoaderService } from '../../../core/shared/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);
  public currentUser = new BehaviorSubject<User>(null);
  private USERS_URL = 'http://localhost:3004/users';
  private error$ = new BehaviorSubject<string>('');

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private loaderService: LoaderService
  ) {
    this.loginByToken();
  }

  login(authData): void {
    this.httpClient
      .get(`${this.USERS_URL}/?login=${authData.login}`)
      .subscribe(([user]: User[]) => {
        if (!user) {
          this.setError('login');
          console.log('no such user!!!');
          this.isAuth.next(false);
          return;
        }

        const isPasswordCorrect = user.password === authData.password;
        this.isAuth.next(isPasswordCorrect);
        if (!isPasswordCorrect) {
          this.setError('password');
          console.log('wrong password!');
          return;
        }
        localStorage.setItem('user-token', user.fakeToken);
        this.currentUser.next(user);
        this.router.navigate(['/courses']);
      });
  }

  private loginByToken() {
    const fakeToken = localStorage.getItem('user-token');
    if (fakeToken) {
      this.httpClient
        .get(`${this.USERS_URL}/?fakeToken=${fakeToken}`)
        .subscribe(([user]: User[]) => {
          if (user) {
            this.currentUser.next(user);
            this.isAuth.next(true);
            this.router.navigate(['/courses']);
          }
        });
    } else {
      this.loaderService.stopLoading();
    }
  }

  logout() {
    this.setError('');
    localStorage.removeItem('user-token');
    this.currentUser.next(null);
    this.isAuth.next(false);
    this.router.navigate(['/login']);
  }

  private setError(error: string) {
    this.error$.next(error);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  getUserInfo(): Observable<User> {
    return this.currentUser.asObservable();
  }
}
