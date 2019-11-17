import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent implements OnInit {
  public userLogin: string;
  public isAuth: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe(isLoggedIn => {
      this.isAuth = isLoggedIn;
      if (isLoggedIn) {
        this.userLogin = this.auth.getUserInfo();
      }
    });
  }

  onLogOff() {
    this.auth.logout();
    this.userLogin = '';
  }
}
