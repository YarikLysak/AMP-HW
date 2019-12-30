import { CoursesState } from '../shared/store/courses-state.model';
import { AuthState } from '../auth/shared/store/auth-state.model';

export interface AppState {
  coursesFeature: CoursesState;
  authFeature: AuthState;
}
