import { createSelector } from '@ngrx/store';

import { AppState } from '../../store/app-state.model';
import { ToolsState } from './tools-state.model';

const toolsFeature = (state: AppState) => state.toolsFeature;

export const getSpinnerStatus = createSelector(
  toolsFeature,
  (state: ToolsState) => state.isSpin
);

export const getBreadcrums = createSelector(
  toolsFeature,
  (state: ToolsState) => state.breadcrumbs
);
