import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IsFreshStatusDirective } from '../../shared/directives/isFreshStatus.directive';
import { DurationPipe } from '../../shared/pipes/duration/duration.pipe';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  const mockCourse = {
    id: 2,
    title: `Video Course 2. Name tag`,
    description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
    creationDate: new Date(2019, 8, 1)
      .toLocaleDateString()
      .split('/')
      .join('-'),
    duration: 115,
    isTopRated: true,
    authors: ''
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent, IsFreshStatusDirective, DurationPipe],
      imports: [RouterTestingModule, ReactiveFormsModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click', () => {
    const deleteSpy = spyOn(component, 'onDelete');
    const debugEl = fixture.debugElement.nativeElement;
    const deleteBtn = debugEl.querySelector('.delete-btn');

    deleteBtn.click();
    fixture.detectChanges();

    expect(deleteSpy).toHaveBeenCalled();
  });
});
