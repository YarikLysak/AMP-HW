import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCourseComponent } from './manage-course/manage-course.component';

const routes: Routes = [
  {
    path: 'course-manage',
    children: [
      { path: '', redirectTo: 'new', pathMatch: 'full' },
      {
        path: 'new',
        component: ManageCourseComponent,
        data: { breadcrumbs: 'New Course' }
      },
      {
        path: ':id',
        component: ManageCourseComponent,
        data: { breadcrumbs: 'Edit Course' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseManageRoutingModule {}
