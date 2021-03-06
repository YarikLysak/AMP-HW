import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/shared/guards/auth.guard';

import { CoursesDashboardModule } from './courses-dashboard/courses-dashboard.module';
import { AuthModule } from './auth/auth.module';

import { LoginComponent } from './auth/login/login.component';
import { CoursesComponent } from './courses-dashboard/courses/courses.component';
import { CoursesListComponent } from './courses-dashboard/courses-list/courses-list.component';
import { ManageCourseComponent } from './courses-dashboard/manage-course/manage-course.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesListComponent,
        data: { breadcrumbs: 'Courses' }
      },
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
  },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CoursesDashboardModule, AuthModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
