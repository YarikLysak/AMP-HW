import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  startSpinner,
  startSpinnerSuccess,
  stopSpinner,
  stopSpinnerSuccess,
  setBreadcrumbs,
  setBreadcrumbsSuccess,
  clearBreadcrumbs
} from './tools.actions';

@Injectable()
export class ToolsEffects {
  startSpin$ = createEffect(() =>
    this.actions.pipe(
      ofType(startSpinner),
      map(() => startSpinnerSuccess({ isSpin: true }))
    )
  );
  stopSpin$ = createEffect(() =>
    this.actions.pipe(
      ofType(stopSpinner),
      map(() => stopSpinnerSuccess({ isSpin: false }))
    )
  );

  setBreadcrumbs$ = createEffect(() =>
    this.actions.pipe(
      ofType(setBreadcrumbs),
      map(({ breadcrumb }) => setBreadcrumbsSuccess({ breadcrumb }))
    )
  );
  clearBreadcrumbs$ = createEffect(() =>
    this.actions.pipe(
      ofType(clearBreadcrumbs),
      map(() => setBreadcrumbsSuccess({ breadcrumb: '' }))
    )
  );
  constructor(private actions: Actions) {}
}
