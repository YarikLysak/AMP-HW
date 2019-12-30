import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './login/login.component';
import { isAuthReducer } from './shared/store/auth/isAuth.reducer';
import { authReducer } from './shared/store/auth/auth.reducer';
import { errorsReducer } from './shared/store/errors/errors.reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authFeature', {
      isAuth: isAuthReducer,
      user: authReducer,
      error: errorsReducer
    })
  ]
})
export class AuthModule {}
