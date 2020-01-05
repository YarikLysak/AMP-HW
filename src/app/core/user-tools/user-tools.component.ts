import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../../store/app-state.model';
import { logout } from '../../auth/store/auth.actions';
import { getIsAuth, getUser } from '../../auth/store/auth.selectors';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent {
  public isAuth$: Observable<boolean> = this.store.select(getIsAuth);
  public userName$: Observable<{
    first: string;
    last: string;
  }> = this.store.select(getUser).pipe(
    map(({ name }) => {
      return name;
    })
  );

  constructor(private store: Store<AppState>) {}

  onLogOff() {
    this.store.dispatch(logout({ isAuth: false }));
  }
}
