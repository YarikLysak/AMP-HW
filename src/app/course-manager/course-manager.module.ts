import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ApplicationPipesModule } from '../application-pipes/application-pipes.module';

import { ManageCourseComponent } from './manage-course/manage-course.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';

@NgModule({
  declarations: [
    ManageCourseComponent,
    DatePickerComponent,
    DurationInputComponent,
    AuthorsListComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, ApplicationPipesModule]
})
export class CourseManagerModule {}
