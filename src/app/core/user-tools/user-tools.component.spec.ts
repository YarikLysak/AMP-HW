import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToolsComponent } from './user-tools.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserToolsComponent', () => {
  let component: UserToolsComponent;
  let fixture: ComponentFixture<UserToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserToolsComponent],
      imports: [HttpClientModule, RouterTestingModule]
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
});
