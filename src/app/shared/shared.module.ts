import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { IsFreshStatusDirective } from './directives/isFreshStatus.directive';
import { AuthTokenInterceptor } from './interceptors/authToken.interceptor';

@NgModule({
  declarations: [DurationPipe, OrderByPipe, IsFreshStatusDirective],
  exports: [DurationPipe, OrderByPipe, IsFreshStatusDirective],
  imports: [CommonModule],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ]
})
export class SharedModule {}
