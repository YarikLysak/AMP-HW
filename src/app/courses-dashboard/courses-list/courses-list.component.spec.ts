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
import { DurationPipe } from '../../application-pipes/duration/duration.pipe';
import { OrderByPipe } from '../../application-pipes/orderBy/order-by.pipe';
import { FilterCoursePipe } from '../../application-pipes/filterCourse/filterCourse.pipe';
import { ModalModule } from 'ngx-bootstrap';

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
        OrderByPipe
      ],
      providers: [CoursesService, FilterCoursePipe],
      imports: [RouterTestingModule, ReactiveFormsModule, ModalModule.forRoot()]
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

  it('should create a coursesList', () => {
    const coursesList = testBedService.getCourses();
    expect(coursesList).toBeTruthy();
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

  it('should contain showFiltered', done => {
    const searchComponent = new SearchBarComponent(
      new CoursesService(),
      new FilterCoursePipe()
    );

    searchComponent.filtered.subscribe(data => {
      expect(data).toBeTruthy();
      done();
    });
    searchComponent.searchCourses();
  });
});
