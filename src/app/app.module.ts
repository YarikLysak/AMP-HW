import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './components/core-module/core.module';
import { CoursesDashboardModule } from './components/courses-dashboard/courses-dashboard.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    CoursesDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
