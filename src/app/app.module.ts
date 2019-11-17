import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { CoursesDashboardModule } from './courses-dashboard/courses-dashboard.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    CoursesDashboardModule,
    AuthModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
