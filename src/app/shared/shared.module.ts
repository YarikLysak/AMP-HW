import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FilterCoursePipe } from './pipes/filterCourse/filterCourse.pipe';

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterCoursePipe],
  exports: [DurationPipe, OrderByPipe, FilterCoursePipe],
  imports: [CommonModule],
  providers: [FilterCoursePipe]
})
export class SharedModule {}
