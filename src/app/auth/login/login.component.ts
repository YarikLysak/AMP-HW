import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: Store<AppState>) {
    this.store.dispatch(findToken());
    this.error$ = this.store.select(getError).pipe(
      map(error => {
        return error ? `BASE.${error.toUpperCase()}` : '';
      })
    );
  }

  onSubmit() {
    this.store.dispatch(login({ loginData: this.loginForm.value }));
    this.loginForm.reset();
  }
}
