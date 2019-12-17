import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SpinnerService } from '../shared/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent {
  public isShow$: Observable<boolean>;

  constructor(private spinner: SpinnerService) {
    this.isShow$ = this.spinner.getSpinnerStatus();
  }
}
