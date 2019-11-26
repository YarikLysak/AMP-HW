import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from 'src/app/shared/services/courses/courses.service';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.sass']
})
export class ManageCourseComponent implements OnInit {
  public editCourse: Course;
  public editCourseId: number;
  private sub: Subscription;

  public manageCourseForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    createDate: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      )
    ]),
    authors: new FormControl('', [Validators.required])
  });

  constructor(
    private route: ActivatedRoute,
    private courseService: CoursesService
  ) {}

  ngOnInit() {
    this.editCourseId = +this.route.snapshot.paramMap.get('id');

    if (this.editCourseId) {
      this.editCourse = this.courseService.getCourseById(this.editCourseId);
      this.manageCourseForm.setValue({
        title: this.editCourse.title,
        description: this.editCourse.description.trim(),
        duration: this.editCourse.duration,
        createDate: this.editCourse.creationDate,
        authors: ''
      });
    }
  }

  onSubmit() {
    console.log(this.manageCourseForm.value);
    this.manageCourseForm.reset();
  }
}
