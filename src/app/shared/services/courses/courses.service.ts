import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../../course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private COURSES_URL = 'http://localhost:3004/courses';
  public coursesList$ = new BehaviorSubject<Course[]>([]);

  constructor(private httpClient: HttpClient) {
    this.httpRequestCourses();
  }

  getCourses(): Observable<Course[]> {
    return this.coursesList$.asObservable();
  }

  addCourse(newCourse: Course) {
    this.httpClient.put(this.COURSES_URL, newCourse);
    this.getCourses();
  }

  getCourseById(id: number): Observable<Course> {
    return this.httpClient
      .get(`${this.COURSES_URL}/${id}`)
      .pipe(map((course: Course) => course));
  }

  updateCourse(updatedCourse: Course) {
    this.httpClient.patch(
      `${this.COURSES_URL}/${updatedCourse.id}`,
      updatedCourse
    );
    this.httpRequestCourses();
  }

  removeCourse(id: number) {
    this.httpClient.delete(`${this.COURSES_URL}/${id}`);
  }

  private httpRequestCourses() {
    console.log('request');
    this.httpClient
      .get(this.COURSES_URL)
      .subscribe((courses: Course[]) => this.coursesList$.next(courses));
  }
}
