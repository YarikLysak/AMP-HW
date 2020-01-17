import { Course } from '../shared/models/course.model';
import { Author } from '../shared/models/author.model';

export interface CoursesState {
  authors: Author[];
  coursesList: Course[];
  course: Course;
}
