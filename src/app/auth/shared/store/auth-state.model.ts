import { User } from '../models/user.model';

export interface AuthState {
  user: User;
  error: string;
  isAuth: boolean;
}
