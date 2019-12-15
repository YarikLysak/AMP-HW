import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Course } from '../../shared/models/course.model';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';
import { SpinnerService } from '../../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.sass']
})
export class ManageCourseComponent implements OnInit {
  public editCourse: Course = null;
  public editCourseId: number | null = null;
  private breadcrumb = '';

  public manageCourseForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    length: new FormControl('', [Validators.required]),
    date: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      )
    ]),
    authors: new FormControl('', [Validators.required])
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private coursesService: CoursesService,
    private breadcrumbsService: BreadcrumbsService,
    private spinner: SpinnerService
  ) {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.breadcrumb = this.route.snapshot.data.breadcrumbs;
    if (paramId) {
      this.editCourseId = +paramId;
    } else {
      this.editCourseId = null;
      this.breadcrumbsService.setBreadcrumb(this.breadcrumb);
    }
  }

  ngOnInit() {
    if (this.editCourseId) {
      this.spinner.startStinner();
      this.coursesService.getCourseById(this.editCourseId).subscribe(course => {
        this.editCourse = course;
        this.breadcrumbsService.setBreadcrumb(
          this.breadcrumb,
          this.editCourse.name
        );
        this.manageCourseForm.setValue({
          name: this.editCourse.name,
          description: this.editCourse.description.trim(),
          length: this.editCourse.length,
          date: this.datePipe.transform(this.editCourse.date, 'd MMM, yyyy'),
          authors: this.editCourse.authors
        });
        this.spinner.stopSpinner();
      });
    }
  }

  onSubmit() {
    this.spinner.startStinner();
    if (this.editCourseId) {
      this.coursesService
        .updateCourse({
          ...this.editCourse,
          ...this.manageCourseForm.value,
          date: new Date(this.manageCourseForm.controls.date.value)
        })
        .subscribe(
          () => {
            this.spinner.stopSpinner();
          },
          err => console.error(err)
        );
    } else {
      this.coursesService
        .addCourse({
          ...this.manageCourseForm.value,
          date: new Date(this.manageCourseForm.controls.date.value),
          isTopRated: false
        })
        .subscribe(
          () => {
            this.spinner.stopSpinner();
          },
          err => console.error(err)
        );
    }
    this.router.navigate(['/courses']);
    this.manageCourseForm.reset();
  }

  onCancel() {
    this.router.navigate(['/courses']);
    this.manageCourseForm.reset();
  }
}
