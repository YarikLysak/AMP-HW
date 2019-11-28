import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { AuthorsListComponent } from './authors-list.component';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

describe('AuthorsListComponent', () => {
  let component: AuthorsListComponent;
  let fixture: ComponentFixture<AuthorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsListComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(AuthorsListComponent);
    component = fixture.componentInstance;
    component.parentForm = fb.group({
      authors: ['', Validators.required]
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
