import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass'],
})
export class CoursesListComponent implements OnInit {
  public courseList = [];
  constructor() {}

  ngOnInit() {
    (() => {
      for (let i = 0; i < 4; i++) {
        this.courseList.push({
          id: i,
          title: `Video Course ${i}. Name tag`,
          description: `
          Learn about where you can find course descriptions, 
          what information they include, 
          how they work, and details about various components of a course description.
          Course descriptions report information about a university or college's classes.
          They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions 
          for all courses offered during a particular semester.`,
          creationDate: '9 Nov.2018',
          duration: '1h 55 min',
        });
      }
    })();
  }

  onDelete(id: number) {
    console.log(id, 'delete');
  }
}
