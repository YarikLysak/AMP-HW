export interface Course {
  id: Number | String;
  title: String;
  creationDate: String;
  duration: Number | String;
  description: String;
}

export class Course implements Course {
  id: Number | String;
  title: String;
  creationDate: String;
  duration: Number | String;
  description: String;
}
