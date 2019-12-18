import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth/shared/services/auth.service';
import { LoaderService } from './core/shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title = 'AMP-HW';
  public isAuth$: Observable<boolean>;
  public loadStatus$: Observable<boolean>;

  constructor(
    private auth: AuthService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.isAuth$ = this.auth.isAuthenticated();
    this.loadStatus$ = this.loaderService.getLoaderStatus();
  }
}
