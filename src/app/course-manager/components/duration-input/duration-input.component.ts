import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationInputComponent implements OnInit {
  @Input() parentForm: FormGroup;

  ngOnInit() {
    console.log(this.parentForm);
  }
}
