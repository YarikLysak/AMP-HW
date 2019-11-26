import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsListComponent implements OnInit {
  @Input() parentForm: FormGroup;

  ngOnInit() {
    console.log(this.parentForm);
  }
}
