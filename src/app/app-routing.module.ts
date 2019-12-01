import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/shared/guards/auth.guard';

import { LoginComponent } from './auth/login/login.component';
import { CoursesComponent } from './courses-dashboard/courses/courses.component';
import { CoursesListComponent } from './courses-dashboard/courses-list/courses-list.component';
import { ManageCourseComponent } from './course-manager/manage-course/manage-course.component';
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
        data: { breadcrumbs: 'Courses/New Course' }
      },
      {
        path: ':id',
        component: ManageCourseComponent,
        data: { breadcrumbs: 'Courses/Edit Course' }
      }
    ]
  },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
