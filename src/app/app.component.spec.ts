import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchBarComponent } from './courses-dashboard/components/search-bar/search-bar.component';
import { FooterComponent } from './core/footer/footer.component';
import { LogoComponent } from './core/logo/logo.component';
import { UserToolsComponent } from './core/user-tools/user-tools.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { SpinnerComponent } from './core/spinner/spinner.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        LogoComponent,
        UserToolsComponent,
        FooterComponent,
        BreadcrumbsComponent,
        SearchBarComponent,
        SpinnerComponent
      ],
      providers: []
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
