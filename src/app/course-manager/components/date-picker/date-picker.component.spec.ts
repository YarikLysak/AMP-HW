import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { DatePickerComponent } from './date-picker.component';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    component.parentForm = fb.group({
      creationDate: ['', Validators.required]
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
