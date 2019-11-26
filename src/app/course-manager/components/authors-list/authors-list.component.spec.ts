import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsListComponent } from './authors-list.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AuthorsListComponent', () => {
  let component: AuthorsListComponent;
  let fixture: ComponentFixture<AuthorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsListComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
