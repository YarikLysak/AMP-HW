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

import { coursesListReducer } from './shared/store/coursesList.reducer';
import { CoursesListEffects } from './shared/store/courses.effect';
import { authReducer } from './auth/shared/store/auth/auth.reducer';
import { errorsReducer } from './auth/shared/store/errors/errors.reducer';
import { isAuthReducer } from './auth/shared/store/auth/isAuth.reducer';
import { AuthEffects } from './auth/shared/store/auth/auth.effect';

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
    StoreModule.forRoot({
      coursesList: coursesListReducer,
      user: authReducer,
      errors: errorsReducer,
      isAuth: isAuthReducer
    }),
    EffectsModule.forRoot([CoursesListEffects, AuthEffects])
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
