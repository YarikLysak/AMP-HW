import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app-state.model';
import { login, findToken } from '../store/auth.actions';
import { getError } from '../store/auth.selectors';

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

  constructor(private store: Store<AppState>) {
    this.store.dispatch(findToken());
    this.error$ = this.store.select(getError);
  }

  onSubmit() {
    this.store.dispatch(login({ loginData: this.loginForm.value }));
    this.loginForm.reset();
  }
}
