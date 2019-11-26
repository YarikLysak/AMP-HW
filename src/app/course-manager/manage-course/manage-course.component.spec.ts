import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCourseComponent } from './manage-course.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ManageCourseComponent', () => {
  let component: ManageCourseComponent;
  let fixture: ComponentFixture<ManageCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCourseComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
