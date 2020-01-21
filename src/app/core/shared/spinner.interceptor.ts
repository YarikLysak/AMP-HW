import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { startSpinner, stopSpinner } from '../store/tools.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(startSpinner({ isSpin: true }));

    return next
      .handle(request)
      .pipe(
        finalize(() => this.store.dispatch(stopSpinner({ isSpin: false })))
      );
  }
}
