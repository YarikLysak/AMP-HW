import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { AuthState } from '../../auth/shared/models/auth-state.model';
import { logoutAction } from '../../auth/shared/store/auth/auth.actions';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent {
  public isAuth$: Observable<boolean> = this.store.pipe(select('isAuth'));
  public userName$: Observable<{
    first: string;
    last: string;
  }> = this.store.pipe(
    select('user'),
    map(({ name }) => {
      return name;
    })
  );

  constructor(private store: Store<AuthState>) {}

  onLogOff() {
    this.store.dispatch(logoutAction({ isAuth: false }));
  }
}
