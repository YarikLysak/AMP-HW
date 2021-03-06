import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { UserToolsComponent } from './user-tools/user-tools.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';

import { SpinnerInterceptor } from './shared/spinner.interceptor';
import { toolsReducer } from './store/tools.reducer';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    UserToolsComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NotFoundComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    StoreModule.forFeature('toolsFeature', toolsReducer)
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SpinnerComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ]
})
export class CoreModule {}
