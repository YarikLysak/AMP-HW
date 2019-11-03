import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/common-elements/components/header/header.component';
import { SearchBarComponent } from './modules/courses-dashboard/components/search-bar/search-bar.component';
import { FooterComponent } from './modules/common-elements/components/footer/footer.component';
import { LogoComponent } from './modules/common-elements/components/logo/logo.component';
import { UserToolsComponent } from './modules/common-elements/components/user-tools/user-tools.component';
import { BreadcrumbsComponent } from './modules/common-elements/components/breadcrumbs/breadcrumbs.component';
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
