import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToolsComponent } from './user-tools.component';
import { HttpClientModule } from '@angular/common/http';

describe('UserToolsComponent', () => {
  let component: UserToolsComponent;
  let fixture: ComponentFixture<UserToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserToolsComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set User Login', () => {
    const userLogin = component.userLogin;
    component.ngOnInit();

    expect(userLogin).toBe('User Login');
  });
});
