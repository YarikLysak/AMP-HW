import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { AppState } from './store/app-state.model';
import { getIsAuth } from './auth/store/auth.selectors';
import { getSpinnerStatus } from './core/store/tools.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'AMP-HW';
  public isAuth$: Observable<boolean> = this.store.select(getIsAuth);
  public spinnerStatus$: Observable<boolean> = this.store.select(
    getSpinnerStatus
  );

  constructor(
    private store: Store<AppState>,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');
}
