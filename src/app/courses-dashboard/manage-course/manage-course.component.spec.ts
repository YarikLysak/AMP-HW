import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';

import { ManageCourseComponent } from './manage-course.component';
import { DatePickerComponent } from '../components/date-picker/date-picker.component';
import { DurationInputComponent } from '../components/duration-input/duration-input.component';
import { AuthorsListComponent } from '../components/authors-list/authors-list.component';

import { DurationPipe } from '../../shared/pipes/duration/duration.pipe';

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
      providers: [DatePipe],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule]
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
