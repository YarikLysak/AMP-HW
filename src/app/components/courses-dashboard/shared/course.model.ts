export interface Course {
  id: number;
  title: string;
  creationDate: any;
  duration: number | string;
  description: string;
  isTopRated: boolean;
}

export class Course implements Course {
  id: number;
  title: string;
  creationDate: any;
  duration: number | string;
  description: string;
  isTopRated: boolean;
}
