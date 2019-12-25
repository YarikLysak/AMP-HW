import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './login/login.component';
import { AuthEffects } from './shared/store/auth/auth.effect';
import { authReducer } from './shared/store/auth/auth.reducer';
import { errorsReducer } from './shared/store/errors/errors.reducer';
import { isAuthReducer } from './shared/store/auth/isAuth.reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      auth: authReducer,
      errors: errorsReducer,
      isAuth: isAuthReducer
    }),
    EffectsModule.forRoot([AuthEffects])
  ]
})
export class AuthModule {}
