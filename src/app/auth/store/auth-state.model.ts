import { User } from '../shared/models/user.model';

export interface AuthState {
  user: User;
  error: string;
  isAuth: boolean;
}
