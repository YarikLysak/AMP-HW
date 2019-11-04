import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-elements/header/header.component';
import { SearchBarComponent } from './common-elements/search-bar/search-bar.component';
import { FooterComponent } from './common-elements/footer/footer.component';
import { LogoComponent } from './common-elements/logo/logo.component';
import { UserToolsComponent } from './common-elements/user-tools/user-tools.component';
import { BreadcrumbsComponent } from './common-elements/breadcrumbs/breadcrumbs.component';
import { ReactiveFormsModule } from '@angular/forms';

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
