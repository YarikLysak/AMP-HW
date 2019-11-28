import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsListComponent {
  @Input() parentForm: FormGroup;
}
