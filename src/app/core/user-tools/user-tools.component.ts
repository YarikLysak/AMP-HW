import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AuthService } from '../../auth/shared/services/auth.service';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/auth/shared/models/auth-state.model';
import { User } from 'src/app/auth/shared/models/user.model';
import { logoutAction } from 'src/app/auth/shared/store/auth/auth.actions';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent implements OnInit {
  public isAuth$: Observable<boolean> = this.store.pipe(select('isAuth'));
  public userName$: Observable<{
    first: string;
    last: string;
  }> = this.store.pipe(
    select('user'),
    map(({ name }) => name)
  );

  constructor(private auth: AuthService, private store: Store<AuthState>) {}

  ngOnInit() {
    // this.userName$ = this.auth.getUserInfo().pipe(
    //   filter(user => !!user),
    //   map(({ name }) => name)
    // );
  }

  onLogOff() {
    this.store.dispatch(logoutAction);
  }
}
