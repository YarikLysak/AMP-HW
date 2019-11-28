import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators
} from '@angular/forms';

import { DurationInputComponent } from './duration-input.component';

import { DurationPipe } from '../../../shared/pipes/duration/duration.pipe';

describe('DurationInputComponent', () => {
  let component: DurationInputComponent;
  let fixture: ComponentFixture<DurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DurationInputComponent, DurationPipe],
      imports: [ReactiveFormsModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(DurationInputComponent);
    component = fixture.componentInstance;
    component.parentForm = fb.group({
      duration: ['', Validators.required]
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
