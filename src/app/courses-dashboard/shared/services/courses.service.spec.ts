import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientModule] })
  );

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
