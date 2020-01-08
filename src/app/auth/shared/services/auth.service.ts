import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../models/user.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser = new BehaviorSubject<User>(null);
  private USERS_URL = 'http://localhost:3004/users';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(loginData: Login): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${this.USERS_URL}/?login=${loginData.login}`
    );
  }

  getUserByToken(token): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.USERS_URL}/?fakeToken=${token}`);
  }

  logout() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
