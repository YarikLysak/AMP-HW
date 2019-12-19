import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const TOKEN = localStorage.getItem('user-token');
    if (TOKEN) {
      request = request.clone({
        setHeaders: { Authorization: TOKEN }
      });
    }

    return next.handle(request);
  }
}
