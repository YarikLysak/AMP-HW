import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserToolsComponent } from './components/user-tools/user-tools.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    UserToolsComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    LogoComponent,
    UserToolsComponent,
    FooterComponent,
    BreadcrumbsComponent
  ]
})
export class CommonElementsModule {}
