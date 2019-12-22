import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  isUserAuthenticated = false;
  returnUrl = '';
  error$: Observable<string>;

  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: AuthService) {}

  onSubmit() {
    this.error$ = this.auth.getError();
    this.auth.login(this.loginForm.value);
    this.loginForm.reset();
  }
}
