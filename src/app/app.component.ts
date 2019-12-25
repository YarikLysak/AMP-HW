import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth/shared/services/auth.service';
import { LoaderService } from './core/shared/loader.service';
import { Store, select } from '@ngrx/store';
import { AuthState } from './auth/shared/models/auth-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title = 'AMP-HW';
  public isAuth$: Observable<boolean> = this.store.pipe(select('isAuth'));
  public loadStatus$: Observable<boolean>;

  constructor(
    private loaderService: LoaderService,
    private store: Store<AuthState>
  ) {}

  ngOnInit() {
    this.loadStatus$ = this.loaderService.getLoaderStatus();
  }
}
