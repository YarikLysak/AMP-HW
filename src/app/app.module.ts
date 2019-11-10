import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CoursesDashboardModule } from './components/courses-dashboard/courses-dashboard.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserToolsComponent } from './components/user-tools/user-tools.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    UserToolsComponent,
    BreadcrumbsComponent,
    SearchBarComponent,
    LoadMoreComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoursesDashboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
