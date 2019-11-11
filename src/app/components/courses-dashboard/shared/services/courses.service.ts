import { Injectable } from '@angular/core';
import { Course } from '../course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courseList: Array<Course> = [];
  public createdCourses;

  constructor() {}

  getCourses() {
    this.createCourseList();
    this.courseList = this.createdCourses.slice('');
    return this.courseList;
  }

  // filterCourses(searchStr) {
  //   this.courseList = this.createdCourses.filter(item => {
  //     return item.title.toLowerCase().includes(searchStr.toLowerCase());
  //   });
  //   console.log('hello', this.courseList);
  // }

  createCourseList() {
    this.createdCourses = [];
    for (let i = 0; i < 4; i++) {
      this.createdCourses.push({
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
    this.createdCourses[1].isTopRated = true;
  }
}
