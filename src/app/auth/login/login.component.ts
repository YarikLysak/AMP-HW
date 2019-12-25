import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthState } from '../shared/models/auth-state.model';
import { loginAction } from '../shared/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  returnUrl = '';
  error$: Observable<string>;

  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private store: Store<AuthState>) {
    this.error$ = this.store.select('error');
  }

  onSubmit() {
    this.store.dispatch(loginAction({ loginData: this.loginForm.value }));
    this.loginForm.reset();
  }
}
