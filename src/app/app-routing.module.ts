import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from './courses-dashboard/courses-list/courses-list.component';
import { ManageCourseComponent } from './course-manager/manage-course/manage-course.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/course-list',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'course-list', component: CoursesListComponent },
  {
    path: 'course-manage',
    component: ManageCourseComponent,
    children: [
      { path: ':id', component: ManageCourseComponent, data: { id: ':id' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
