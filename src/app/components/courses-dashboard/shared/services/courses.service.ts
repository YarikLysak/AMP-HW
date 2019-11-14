import { Injectable } from '@angular/core';
import { Course } from '../course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public coursesList: Course[] = [];

  getCourses() {
    this.coursesList = this.createCoursesList();
    return this.coursesList;
  }

  createCoursesList() {
    const coursesArray: Course[] = [];
    for (let i = 0; i < 4; i++) {
      coursesArray.push({
        id: i,
        title: `Video Course ${i}. Name tag`,
        description: `
        Learn about where you can find course descriptions,
        what information they include,
        how they work, and details about various components of a course description.
        Course descriptions report information about a university or college's classes.
        They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions 
        for all courses offered during a particular semester.`,
        creationDate: new Date(2019, 8 + i, 1).toLocaleDateString(),
        duration: '115',
        isTopRated: false
      });
    }
    coursesArray[1].isTopRated = true;
    return [...coursesArray];
  }
}
