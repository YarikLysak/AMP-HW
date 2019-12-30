import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthState } from '../shared/store/auth-state.model';
import { login } from '../shared/store/auth/auth.actions';
import { getError } from '../shared/store/auth.selectors';

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
    this.error$ = this.store.select(getError);
  }

  onSubmit() {
    this.store.dispatch(login({ loginData: this.loginForm.value }));
    this.loginForm.reset();
  }
}
