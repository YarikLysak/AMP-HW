import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseComponent,
    ManageCourseComponent,
    SearchBarComponent,
    LoadMoreComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [CoursesListComponent, CourseComponent, ManageCourseComponent]
})
export class CoursesDashboardModule {}
