import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app-state.model';
import { startSpinner, stopSpinner } from '../store/tools.actions';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(startSpinner());

    return next.handle(request).pipe(
      finalize(() => {
        this.store.dispatch(stopSpinner());
      })
    );
  }
}
