import { Course } from './course.model';

export interface CoursesState {
  coursesList: Course[];
  course: Course;
}
