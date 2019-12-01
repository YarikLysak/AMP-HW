import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  isUserAuthenticated = false;
  returnUrl = '';

  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.logout();
  }

  onSubmit() {
    this.auth.login(this.loginForm.value);
    this.loginForm.reset();
  }
}
