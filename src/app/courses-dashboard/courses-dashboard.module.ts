import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonElementsModule } from '../common-elements/common-elements.module';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';

@NgModule({
  declarations: [CoursesListComponent, CourseComponent, ManageCourseComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CommonElementsModule
  ],
  exports: [CoursesListComponent, CourseComponent, ManageCourseComponent]
})
export class CoursesDashboardModule {}
