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
  // mockUsers = [
  //   {
  //     id: 1,
  //     email: 'admin@admin',
  //     password: '12345',
  //     token: '4QhmRwHwwrgFqXULXNtx4d'
  //   }
  // ];

  // currentUser = new BehaviorSubject<User>(this.mockUsers[0]);

  public currentUser = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(authData) {
    this.isAuth.next(false);
    const token = localStorage.getItem('user-token') || '';

    this.httpClient
      .get(`http://localhost:3001/users/?token=${token}`)
      .subscribe((usersData: User[]) => {
        if (usersData.length !== 0) {
          this.currentUser.next(usersData[0]);
          this.isAuth.next(true);
        } else {
          this.httpClient
            .get(
              `http://localhost:3001/users/?email=${authData.email.toLowerCase()}`
            )
            .subscribe((user: User[]) => {
              if (user.length === 0) {
                this.isAuth.next(false);
                console.log('no such user!!!');
              } else {
                if (user[0].password === authData.password) {
                  localStorage.setItem('user-token', user[0].token);
                  localStorage.setItem('user-email', user[0].email);
                  this.isAuth.next(true);
                  this.currentUser.next(user[0]);
                  this.router.navigate(['/course-list']);
                } else {
                  this.isAuth.next(false);
                  console.log('wrong password!');
                }
              }
            });
        }
      });
  }

  logout() {
    localStorage.setItem('user-email', '');
    localStorage.setItem('user-token', '');
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
