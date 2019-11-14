import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoadMoreComponent } from './load-more/load-more.component';

import { IsFreshStatusDirective } from './shared/directives/isFreshStatus.directive';
import { DurationPipe } from './shared/pipes/duration/duration.pipe';
import { OrderByPipe } from './shared/pipes/orderBy/order-by.pipe';
import { FilterCoursePipe } from './shared/pipes/filterCourse/filterCourse.pipe';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseComponent,
    ManageCourseComponent,
    SearchBarComponent,
    LoadMoreComponent,
    IsFreshStatusDirective,
    DurationPipe,
    OrderByPipe,
    FilterCoursePipe
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [CoursesListComponent, CourseComponent, ManageCourseComponent],
  providers: [FilterCoursePipe]
})
export class CoursesDashboardModule {}
