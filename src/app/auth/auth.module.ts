import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login/login.component';
import { authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    StoreModule.forFeature('authFeature', authReducer)
  ]
})
export class AuthModule {}
