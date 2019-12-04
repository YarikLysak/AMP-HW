import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = new BehaviorSubject<boolean>(false);
  public currentUser = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient, private router: Router) {
    this.loginByToken();
  }

  login(authData): void {
    this.makeHttpRequest(`?email=${authData.email.toLowerCase()}`).subscribe(
      ([user]: User[]) => {
        if (!user) {
          console.log('no such user!!!');
          this.isAuth.next(false);
          return;
        }

        const isPasswordCorrect = user.password === authData.password;
        this.isAuth.next(isPasswordCorrect);
        if (!isPasswordCorrect) {
          console.log('wrong password!');
          return;
        }

        localStorage.setItem('user-token', user.token);
        this.currentUser.next(user);
        this.router.navigate(['/courses']);
      }
    );
  }

  private loginByToken() {
    const token = localStorage.getItem('user-token');
    if (token) {
      this.makeHttpRequest(`?token=${token}`).subscribe(([user]: User[]) => {
        if (user) {
          this.currentUser.next(user);
          this.isAuth.next(true);
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

  private makeHttpRequest(query): Observable<any> {
    const url = 'http://localhost:3001/users';
    return this.httpClient.get(`${url}/${query}`);
  }
}
