import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoaderService } from './core/shared/loader.service';
import { AppState } from './store/app-state.model';
import { getIsAuth } from './auth/shared/store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title = 'AMP-HW';
  public isAuth$: Observable<boolean> = this.store.select(getIsAuth);
  public loadStatus$: Observable<boolean>;

  constructor(
    private loaderService: LoaderService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.loadStatus$ = this.loaderService.getLoaderStatus();
  }
}
