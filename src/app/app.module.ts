import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { CoursesDashboardModule } from './courses-dashboard/courses-dashboard.module';
import { CourseManagerModule } from './course-manager/course-manager.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    CoursesDashboardModule,
    CourseManagerModule,
    AuthModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
