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
    textFragment: '',
    sort: 'date'
  };
  private isFiltered = false;

  constructor(private http: HttpClient) {
    this.getCoursesArray();
  }

  loadMoreCourses() {
    this.courseOnPageAmount = !this.isFiltered
      ? 3
      : this.courseOnPageAmount + 3;
    this.getCoursesArray();
  }

  searchCourses(searchString: string) {
    this.isFiltered = !!searchString;
    this.searchingParams.textFragment = searchString;
    this.getCoursesArray();
  }

  getCourses(): Observable<Course[]> {
    return this.coursesList$.asObservable();
  }

  addCourse(newCourse: Course) {
    this.http
      .post(this.COURSES_URL, JSON.stringify(newCourse), this.httpOptions)
      .subscribe(
        () => {
          this.getCoursesArray();
        },
        err => console.error(err)
      );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.COURSES_URL}/${id}`);
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
          this.getCoursesArray();
        },
        err => console.error(err)
      );
  }

  removeCourse(id: number) {
    this.http.delete(`${this.COURSES_URL}/${id}`, this.httpOptions).subscribe(
      () => {
        this.getCoursesArray();
      },
      err => console.error(err)
    );
  }

  private getCoursesArray() {
    this.searchingParams.count = `${this.courseOnPageAmount}`;
    this.http
      .get(this.COURSES_URL, { params: this.searchingParams })
      .subscribe((courses: Course[]) => {
        console.log(courses, 'request');
        this.coursesList$.next(courses);
      });
  }
}
