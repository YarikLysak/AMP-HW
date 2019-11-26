import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './duration/duration.pipe';
import { OrderByPipe } from './orderBy/order-by.pipe';
import { FilterCoursePipe } from './filterCourse/filterCourse.pipe';

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterCoursePipe],
  exports: [DurationPipe, OrderByPipe, FilterCoursePipe],
  imports: [CommonModule],
  providers: [FilterCoursePipe]
})
export class ApplicationPipesModule {}
