import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.sass']
})
export class DatePickerComponent implements OnInit {
  @Input() parentForm: FormGroup;

  ngOnInit() {
    console.log(this.parentForm);
  }
}
