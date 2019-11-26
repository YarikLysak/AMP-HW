export interface Course {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  isTopRated: boolean;
}

export class Course implements Course {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  isTopRated: boolean;
}
