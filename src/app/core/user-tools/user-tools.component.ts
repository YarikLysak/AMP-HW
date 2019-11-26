import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../auth/shared/services/auth.service';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent implements OnInit {
  public isAuth$: Observable<boolean>;
  public userEmail$: Observable<string>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isAuth$ = this.auth.isAuthenticated();
    this.userEmail$ = this.auth.getUserInfo().pipe(map(({ email }) => email));
  }

  onLogOff() {
    this.auth.logout();
  }
}
