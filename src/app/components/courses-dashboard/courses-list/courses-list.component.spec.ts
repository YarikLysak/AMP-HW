import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CourseComponent } from '../course/course.component';
import { LoadMoreComponent } from '../load-more/load-more.component';
import { CoursesService } from '../shared/services/courses.service';
import { IsFreshStatusDirective } from '../shared/directives/isFreshStatus.directive';
import { DurationPipe } from '../shared/pipes/duration/duration.pipe';
import { DateStylePipe } from '../shared/pipes/dateStyle/date.pipe';
import { OrderByPipe } from '../shared/pipes/orderBy/order-by.pipe';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let testBedService: CoursesService;

  const mockCourse = {
    id: 2,
    title: `Video Course 2. Name tag`,
    description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
    creationDate: new Date(2019, 8, 1).toLocaleDateString(),
    duration: '115',
    isTopRated: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        SearchBarComponent,
        CourseComponent,
        LoadMoreComponent,
        IsFreshStatusDirective,
        DurationPipe,
        DateStylePipe
      ],
      providers: [CoursesService, OrderByPipe],
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
    testBedService = TestBed.get(CoursesService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a courseList', () => {
    const courseList = testBedService.getCourses();
    expect(courseList).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [CoursesService],
    (injectService: CoursesService) => {
      expect(injectService).toBe(testBedService);
    }
  ));

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
