import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseComponent } from './components/courses-list/course/course.component';
import { ManageCourseComponent } from './components/courses-list/manage-course/manage-course.component';
import { LoginComponent } from './components/login/login.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { UserToolsComponent } from './components/header/user-tools/user-tools.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadMoreComponent } from './components/courses-list/load-more/load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesListComponent,
    CourseComponent,
    ManageCourseComponent,
    LoginComponent,
    SearchBarComponent,
    BreadcrumbsComponent,
    UserToolsComponent,
    LoadMoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
