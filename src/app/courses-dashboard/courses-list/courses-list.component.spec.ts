import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarComponent } from '../../common-elements/search-bar/search-bar.component';
import { CourseComponent } from '../course/course.component';
import { LoadMoreComponent } from '../../common-elements/load-more/load-more.component';

fdescribe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  const mockCourse = {
    id: 2,
    title: `Video Course 2. Name tag`,
    description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
    creationDate: '9 Nov.2018',
    duration: '1h 55 min'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        SearchBarComponent,
        CourseComponent,
        LoadMoreComponent
      ],
      imports: [RouterTestingModule, ReactiveFormsModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.courseList = [
      {
        id: 0,
        title: `Video Course 0. Name tag`,
        description: `
      Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.
      Course descriptions report information about a university or college's classes.`,
        creationDate: '9 Nov.2018',
        duration: '1h 55 min'
      },
      {
        id: 1,
        title: `Video Course 1. Name tag`,
        description: `
      Learn about where you can find course descriptions, what information they include,
      how they work, and details about various components of a course description.`,
        creationDate: '9 Nov.2018',
        duration: '1h 55 min'
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a courseList', () => {
    const courseListSpy = spyOn(component, 'createCourseList');
    component.ngOnInit();
    expect(courseListSpy).toHaveBeenCalled();
  });

  it('should contain onDelete', done => {
    const courseComponent = new CourseComponent();

    courseComponent.course = mockCourse;
    courseComponent.deleted.subscribe(data => {
      expect(data).toEqual(mockCourse.id);
      done();
    });

    courseComponent.onDelete();
  });

  it('should log message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.onDelete(1);

    expect(consoleSpy).toHaveBeenCalledWith(1, 'delete');
  });
});
