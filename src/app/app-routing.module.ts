import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/shared/guards/auth.guard';

import { CoursesListComponent } from './courses-dashboard/courses-list/courses-list.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'course-list',
    canActivate: [AuthGuard],
    component: CoursesListComponent,
    data: { breadcrumbs: 'Courses' }
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/course-list',
    pathMatch: 'full'
  },
  {
    path: 'course-manage',
    loadChildren: () =>
      import('./course-manager/course-manager.module').then(
        m => m.CourseManagerModule
      )
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
