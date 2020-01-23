import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  startSpinner,
  startSpinnerSuccess,
  stopSpinner,
  stopSpinnerSuccess
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
  constructor(private actions: Actions) {}
}
