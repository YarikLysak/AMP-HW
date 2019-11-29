import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseManageRoutingModule } from './course-manager-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ManageCourseComponent } from './manage-course/manage-course.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';

@NgModule({
  declarations: [
    ManageCourseComponent,
    DatePickerComponent,
    DurationInputComponent,
    AuthorsListComponent
  ],
  imports: [
    CommonModule,
    CourseManageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CourseManagerModule {}
