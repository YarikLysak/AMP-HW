import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApplicationPipesModule } from '../application-pipes/application-pipes.module';
import { IsFreshStatusDirective } from './shared/directives/isFreshStatus.directive';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseComponent,
    SearchBarComponent,
    LoadMoreComponent,
    IsFreshStatusDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ApplicationPipesModule
  ],
  exports: [CoursesListComponent, CourseComponent]
})
export class CoursesDashboardModule {}
