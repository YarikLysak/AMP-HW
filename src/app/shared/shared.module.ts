import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FilterCoursePipe } from './pipes/filterCourse/filterCourse.pipe';
import { IsFreshStatusDirective } from './directives/isFreshStatus.directive';

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
  imports: [CommonModule],
  providers: [FilterCoursePipe]
})
export class SharedModule {}
