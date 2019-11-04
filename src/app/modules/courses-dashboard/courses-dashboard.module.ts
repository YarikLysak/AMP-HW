import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseComponent } from './components/course/course.component';
import { ManageCourseComponent } from './components/manage-course/manage-course.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseComponent,
    ManageCourseComponent,
    SearchBarComponent,
    LoadMoreComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    CoursesListComponent,
    CourseComponent,
    ManageCourseComponent,
    SearchBarComponent,
    LoadMoreComponent
  ]
})
export class CoursesDashboardModule {}
