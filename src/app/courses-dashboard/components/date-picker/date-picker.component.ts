import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent {
  @Input() parentForm: FormGroup;
  @Input() isError: boolean;
  @Input() outputError: string;
}
