import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

import { coursesListReducer } from './store/coursesList.reducer';
import { courseReducer } from './store/course.reducer';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseComponent,
    SearchBarComponent,
    LoadMoreComponent,
    ManageCourseComponent,
    DatePickerComponent,
    DurationInputComponent,
    AuthorsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('coursesFeature', {
      coursesList: coursesListReducer,
      course: courseReducer
    })
  ]
})
export class CoursesDashboardModule {}
