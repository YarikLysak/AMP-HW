import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private COURSES_URL = 'http://localhost:3004/courses';
  public coursesList$ = new BehaviorSubject<Course[]>([]);
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private courseOnPageAmount = 3;
  private searchingParams = {
    start: '0',
    count: `${this.courseOnPageAmount}`,
    sort: 'date'
  };
  private isFiltered = false;
  private searchString: string;

  constructor(private http: HttpClient) {
    this.httpRequestCourses();
  }

  loadMoreCourses() {
    this.courseOnPageAmount += 3;
    if (!this.isFiltered) {
      this.httpRequestCourses();
    } else {
      this.searchCourses(this.searchString);
    }
  }

  searchCourses(searchString: string) {
    this.searchString = searchString;
    if (!this.searchString) {
      this.courseOnPageAmount = 3;
      this.httpRequestCourses();
      return;
    }
    if (!this.isFiltered) {
      this.courseOnPageAmount = 3;
    }
    this.isFiltered = true;
    this.httpSearchCoursesRequest();
  }

  getCourses(): Observable<Course[]> {
    return this.coursesList$.asObservable();
  }

  addCourse(newCourse: Course) {
    this.http
      .post(this.COURSES_URL, JSON.stringify(newCourse), this.httpOptions)
      .subscribe(
        () => {
          this.httpRequestCourses();
        },
        err => console.error(err)
      );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http
      .get(`${this.COURSES_URL}/${id}`)
      .pipe(map((course: Course) => course));
  }

  updateCourse(updatedCourse: Course) {
    this.http
      .patch(
        `${this.COURSES_URL}/${updatedCourse.id}`,
        JSON.stringify(updatedCourse),
        this.httpOptions
      )
      .subscribe(
        () => {
          this.httpRequestCourses();
        },
        err => console.error(err)
      );
  }

  removeCourse(id: number) {
    this.http.delete(`${this.COURSES_URL}/${id}`, this.httpOptions).subscribe(
      () => {
        this.httpRequestCourses();
      },
      err => console.error(err)
    );
  }

  private httpRequestCourses() {
    this.searchingParams.count = `${this.courseOnPageAmount}`;
    this.isFiltered = false;
    console.log('request');
    this.http
      .get(this.COURSES_URL, { params: this.searchingParams })
      .subscribe((courses: Course[]) => {
        console.log(courses);
        this.coursesList$.next(courses);
      });
  }

  private httpSearchCoursesRequest() {
    this.searchingParams.count = `${this.courseOnPageAmount}`;

    const searchingParams = {
      textFragment: this.searchString,
      ...this.searchingParams
    };
    this.http
      .get(this.COURSES_URL, { params: searchingParams })
      .subscribe((filteredCourses: Course[]) =>
        this.coursesList$.next(filteredCourses)
      );
  }
}
