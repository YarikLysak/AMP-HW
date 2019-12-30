import { Course } from '../models/course.model';

export interface CoursesState {
  coursesList: Course[];
  course: Course;
}
