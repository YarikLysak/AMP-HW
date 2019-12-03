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

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(authData) {
    const token = localStorage.getItem('user-token') || '';

    this.makeHttpRequest(`?token=${token}`).subscribe((loggedUser: User[]) => {
      if (loggedUser.length !== 0) {
        this.currentUser.next(loggedUser[0]);
        this.isAuth.next(true);
        return;
      }

      this.makeHttpRequest(`?email=${authData.email.toLowerCase()}`).subscribe(
        (user: User[]) => {
          if (user.length === 0) {
            console.log('no such user!!!');
            this.isAuth.next(false);
            return;
          }

          const isPasswordCorrect = user[0].password === authData.password;
          this.isAuth.next(isPasswordCorrect);
          if (!isPasswordCorrect) {
            console.log('wrong password!');
            return;
          }

          this.setLSItems(user[0]);
          this.currentUser.next(user[0]);
          this.router.navigate(['/courses']);
        }
      );
    });
  }

  logout() {
    this.setLSItems({ token: '', email: '' });
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

  private makeHttpRequest(query) {
    const url = 'http://localhost:3001/users';
    return this.httpClient.get(`${url}/${query}`);
  }

  private setLSItems(data) {
    localStorage.setItem('user-token', data.token);
    localStorage.setItem('user-email', data.email);
  }
}
