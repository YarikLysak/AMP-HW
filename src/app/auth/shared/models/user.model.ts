export interface User {
  id: number;
  email: string;
  password: string;
  token: string;
}

export class User implements User {
  id: number;
  email: string;
  password: string;
  token: string;
}
