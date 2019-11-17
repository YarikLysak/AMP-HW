import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'AMP-HW';
  isAuth: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe(isLoggedIn => {
      this.isAuth = isLoggedIn;
    });
  }
}
