import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/core-module/header/header.component';
import { SearchBarComponent } from './components/courses-dashboard/search-bar/search-bar.component';
import { FooterComponent } from './components/core-module/footer/footer.component';
import { LogoComponent } from './components/core-module/logo/logo.component';
import { UserToolsComponent } from './components/core-module/user-tools/user-tools.component';
import { BreadcrumbsComponent } from './components/core-module/breadcrumbs/breadcrumbs.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        UserToolsComponent,
        FooterComponent,
        BreadcrumbsComponent,
        SearchBarComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AMP-HW'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AMP-HW');
  });
});
