import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FilterCoursePipe } from './pipes/filterCourse/filterCourse.pipe';
import { IsFreshStatusDirective } from './directives/isFreshStatus.directive';
import { AuthTokenInterceptor } from './interceptors/authToken.interceptor';
import { coursesListReducer } from './store/coursesList.reducer';
import { courseReducer } from './store/course.reducer';

@NgModule({
  declarations: [
    DurationPipe,
    OrderByPipe,
    FilterCoursePipe,
    IsFreshStatusDirective
  ],
  exports: [
    DurationPipe,
    OrderByPipe,
    FilterCoursePipe,
    IsFreshStatusDirective
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('coursesFeature', {
      coursesList: coursesListReducer,
      course: courseReducer
    })
  ],
  providers: [
    FilterCoursePipe,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ]
})
export class SharedModule {}
