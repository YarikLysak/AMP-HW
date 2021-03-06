import { CoursesState } from '../courses-dashboard/store/courses-state.model';
import { AuthState } from '../auth/store/auth-state.model';
import { ToolsState } from '../core/store/tools-state.model';

export interface AppState {
  coursesFeature: CoursesState;
  authFeature: AuthState;
  toolsFeature: ToolsState;
}
