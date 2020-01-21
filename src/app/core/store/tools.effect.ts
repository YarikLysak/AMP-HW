import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import {
  startSpinner,
  startSpinnerSuccess,
  stopSpinner,
  stopSpinnerSuccess
} from './tools.actions';

@Injectable()
export class ToolsEffects {
  startSpin$ = this.actions.pipe(
    ofType(startSpinner),
    map(({ isSpin }) => startSpinnerSuccess({ isSpin }))
  );
  stopSpin$ = this.actions.pipe(
    ofType(stopSpinner),
    map(({ isSpin }) => stopSpinnerSuccess({ isSpin }))
  );
  constructor(private actions: Actions) {}
}
