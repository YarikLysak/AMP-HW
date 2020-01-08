import { Course } from '../shared/models/course.model';

export interface CoursesState {
  coursesList: Course[];
  course: Course;
}
