import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CourseComponent } from '../course/course.component';
import { LoadMoreComponent } from '../load-more/load-more.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

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
    component.courseList = [{ id: 0 }, { id: 1 }];
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
    const onDeleteSpy = spyOn(component, 'onDelete');
    const mockCourse = { id: 1 };
    const courseComponent = new CourseComponent();

    courseComponent.course = mockCourse;
    courseComponent.deleted.subscribe(data => {
      expect(data).toEqual(1);
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
