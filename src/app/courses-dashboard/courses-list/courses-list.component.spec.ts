import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';

import { CoursesListComponent } from './courses-list.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CourseComponent } from '../course/course.component';
import { LoadMoreComponent } from '../load-more/load-more.component';

import { CoursesService } from '../../shared/services/courses/courses.service';
import { IsFreshStatusDirective } from '../../shared/directives/isFreshStatus.directive';
import { DurationPipe } from '../../shared/pipes/duration/duration.pipe';
import { OrderByPipe } from '../../shared/pipes/orderBy/order-by.pipe';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let testBedService: CoursesService;
  let testBedCrumbsService: BreadcrumbsService;

  const mockCourse = {
    id: 2,
    name: `Video Course 2. Name tag`,
    description: `Learn about where you can find course descriptions,what information they include,
    how they work, and details about various components of a course description.`,
    date: new Date(2019, 8, 1)
      .toLocaleDateString()
      .split('/')
      .join('-'),
    length: 115,
    isTopRated: false,
    authors: [{ id: 1, name: '', lastName: '' }]
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
      providers: [CoursesService, BreadcrumbsService],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ModalModule.forRoot()
      ]
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
    testBedCrumbsService = TestBed.get(BreadcrumbsService);

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
  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [BreadcrumbsService],
    (injectService: BreadcrumbsService) => {
      expect(injectService).toBe(testBedCrumbsService);
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
});
