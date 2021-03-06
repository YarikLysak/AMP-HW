import { Author } from './author.model';

export interface Course {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  authors: Author[];
  length: number;
}
