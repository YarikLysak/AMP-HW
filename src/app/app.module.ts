import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoursesDashboardModule } from './modules/courses-dashboard/courses-dashboard.module';
import { CommonElementsModule } from './modules/common-elements/common-elements.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonElementsModule,
    CoursesDashboardModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
