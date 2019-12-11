import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private COURSES_URL = 'http://localhost:3004/courses';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private searchingParams = {
    start: '0',
    count: '3',
    textFragment: '',
    sort: 'date'
  };

  constructor(private http: HttpClient) {}

  loadMoreCourses(next: number) {
    this.searchingParams.count = `${next}`;
    return this.http.get<Course[]>(this.COURSES_URL, {
      params: this.searchingParams
    });
  }

  searchCourses(searchString: string) {
    this.searchingParams.textFragment = searchString;
    return this.http.get<Course[]>(this.COURSES_URL, {
      params: this.searchingParams
    });
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.COURSES_URL, {
      params: this.searchingParams
    });
  }

  addCourse(newCourse: Course) {
    return this.http.post(
      this.COURSES_URL,
      JSON.stringify(newCourse),
      this.httpOptions
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.COURSES_URL}/${id}`);
  }

  updateCourse(updatedCourse: Course) {
    return this.http.patch(
      `${this.COURSES_URL}/${updatedCourse.id}`,
      JSON.stringify(updatedCourse),
      this.httpOptions
    );
  }

  removeCourse(id: number) {
    return this.http.delete(`${this.COURSES_URL}/${id}`, this.httpOptions);
  }
}
