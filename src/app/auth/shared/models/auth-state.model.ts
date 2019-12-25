import { User } from './user.model';

export interface AuthState {
  user: User;
  error: string;
  isAuth: boolean;
}
