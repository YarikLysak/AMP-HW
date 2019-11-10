import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './components/courses-dashboard/courses-list/courses-list.component';
import { ManageCourseComponent } from './components/courses-dashboard/manage-course/manage-course.component';

const routes: Routes = [
  { path: '', redirectTo: '/course-list', pathMatch: 'full' },
  { path: 'course-list', component: CoursesListComponent },
  { path: 'course/:id', component: ManageCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
