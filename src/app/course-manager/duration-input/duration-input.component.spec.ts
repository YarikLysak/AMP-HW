import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationInputComponent } from './duration-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from 'src/app/application-pipes/duration/duration.pipe';

describe('DurationInputComponent', () => {
  let component: DurationInputComponent;
  let fixture: ComponentFixture<DurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DurationInputComponent, DurationPipe],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
