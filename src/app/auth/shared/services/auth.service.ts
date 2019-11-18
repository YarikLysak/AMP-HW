import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = new BehaviorSubject<boolean>(false);
  mockUsers = [
    {
      id: 1,
      email: 'admin@admin',
      password: '12345',
      token: '4QhmRwHwwrgFqXULXNtx4d'
    }
  ];

  currentUser = new BehaviorSubject<User>(this.mockUsers[0]);

  constructor(private httpClient: HttpClient) {}

  login(authData) {
    console.log('logged in successfully');
    localStorage.setItem('user-email', '');
    localStorage.setItem('user-token', '');

    this.currentUser.next(authData);
    this.currentUser.subscribe(user => {
      localStorage.setItem('user-email', user.email);
      localStorage.setItem('user-token', this.mockUsers[0].token);
    });
    this.isAuth.next(true);

    //   const token = localStorage.getItem('user-token') || '';
    //   this.httpClient
    //     .get(`http://localhost:3001/users/?token=${token}`)
    //     .subscribe((userArray: User[]) => {
    //       if (userArray.length !== 0) {
    //         this.currentUser = userArray[0];
    //         this.isAuth.next(true);
    //       } else {
    //         this.httpClient
    //           .get(
    //             `http://localhost:3001/users/?email=${authData.email.toLowerCase()}`
    //           )
    //           .subscribe((user: User[]) => {
    //             if (user.length === 0) {
    //               this.isAuth.next(false);
    //             } else {
    //               if (user[0].password === authData.password) {
    //                 localStorage.setItem('user-token', user[0].token);
    //                 localStorage.setItem('user-email', user[0].email);
    //                 this.isAuth.next(true);
    //               }
    //             }
    //           });
    //       }
    //     });
  }

  logout() {
    localStorage.clear();
    this.isAuth.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  getUserInfo(): Observable<User> {
    return this.currentUser.asObservable();
  }
}
