import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ManageCourseComponent } from './manage-course.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { DurationInputComponent } from '../components/duration-input/duration-input.component';
import { AuthorsListComponent } from '../components/authors-list/authors-list.component';
import { DurationPipe } from 'src/app/shared/pipes/duration/duration.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManageCourseComponent', () => {
  let component: ManageCourseComponent;
  let fixture: ComponentFixture<ManageCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ManageCourseComponent,
        DatePickerComponent,
        DurationInputComponent,
        AuthorsListComponent,
        DurationPipe
      ],
      imports: [ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
