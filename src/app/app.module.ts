import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { CoursesListEffects } from './courses-dashboard/store/courses.effect';
import { AuthEffects } from './auth/store/auth.effect';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([CoursesListEffects, AuthEffects])
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
