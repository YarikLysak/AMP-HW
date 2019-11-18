import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/shared/services/auth.service';
import { User } from '../../auth/shared/models/user.model';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent implements OnInit {
  public userEmail: string;
  public currentUser$: Observable<User>;
  public isAuth: Observable<boolean>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isAuth = this.auth.isAuthenticated();
    this.currentUser$ = this.auth.getUserInfo();
    console.log(this.currentUser$);
  }

  onLogOff() {
    this.auth.logout();
  }
}
