import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AuthService } from '../../auth/shared/services/auth.service';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent implements OnInit {
  public isAuth$: Observable<boolean>;
  public userName$: Observable<{ first: string; last: string }>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isAuth$ = this.auth.isAuthenticated();
    this.userName$ = this.auth.getUserInfo().pipe(
      filter(user => !!user),
      map(({ name }) => name)
    );
  }

  onLogOff() {
    this.auth.logout();
  }
}
