import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.sass']
})
export class ManageCourseComponent {
  public manageCourseForm = new FormGroup({
    title: new FormControl('', [, Validators.required]),
    descrition: new FormControl('', [, Validators.required]),
    duration: new FormControl('', [, Validators.required]),
    createDate: new FormControl('', [, Validators.required]),
    authors: new FormControl('', Validators.required)
  });
}
