import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { UserToolsComponent } from './user-tools/user-tools.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    UserToolsComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent]
})
export class CoreModule {}
