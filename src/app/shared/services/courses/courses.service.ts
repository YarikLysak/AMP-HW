import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../../course.model';

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
  private currentCount = 3;

  constructor(private http: HttpClient) {
    this.httpRequestCourses();
  }

  loadMoreCourses() {
    this.currentCount += 3;
    this.httpRequestCourses();
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
    console.log('request');
    this.http
      .get(`${this.COURSES_URL}?start=5&count=${this.currentCount}`)
      .subscribe((courses: Course[]) => {
        console.log(courses);
        this.coursesList$.next(courses);
      });
  }
}
