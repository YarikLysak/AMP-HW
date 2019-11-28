export interface Course {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  isTopRated: boolean;
  authors: string;
}

export class Course implements Course {
  id: number;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  isTopRated: boolean;
  authors: string;
}
