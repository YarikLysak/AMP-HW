import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app-state.model';
import { startSpinner, stopSpinner } from '../store/tools.actions';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private count = 0;

  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.count++;
    if (this.count === 1) {
      this.store.dispatch(startSpinner());
    }

    return next.handle(request).pipe(
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.store.dispatch(stopSpinner());
        }
      }),
      catchError(err => {
        this.count--;
        return throwError(err);
      })
    );
  }
}
