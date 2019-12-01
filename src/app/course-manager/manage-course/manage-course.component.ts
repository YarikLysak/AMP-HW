import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesService } from '../../shared/services/courses/courses.service';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';
import { Course } from '../../shared/course.model';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.sass']
})
export class ManageCourseComponent implements OnInit {
  public editCourse: Course;
  public editCourseId: number;
  private breadcrumb: string;

  public manageCourseForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    creationDate: new FormControl('', [
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
    private courseService: CoursesService,
    private breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit() {
    this.breadcrumb = this.route.snapshot.data.breadcrumbs;
    this.editCourseId = +this.route.snapshot.paramMap.get('id');

    if (this.editCourseId) {
      this.editCourse = this.courseService.getCourseById(this.editCourseId);
      this.breadcrumbsService.setBreadcrumb(
        this.breadcrumb,
        this.editCourse.title
      );
      this.manageCourseForm.setValue({
        title: this.editCourse.title,
        description: this.editCourse.description.trim(),
        duration: this.editCourse.duration,
        creationDate: this.editCourse.creationDate,
        authors: this.editCourse.authors
      });
    } else {
      this.breadcrumbsService.setBreadcrumb(this.breadcrumb);
    }
  }

  onSubmit() {
    const randId = Math.floor(Math.random() * (20 - 4 + 1)) + 4;

    if (this.editCourseId) {
      this.courseService.updateCourse({
        ...this.editCourse,
        ...this.manageCourseForm.value
      });
    } else {
      this.courseService.addCourse({
        id: randId,
        ...this.manageCourseForm.value,
        isTopRated: false
      });
    }
    this.router.navigate(['/courses']);
    this.manageCourseForm.reset();
  }

  onCancel() {
    this.router.navigate(['/courses']);
    this.manageCourseForm.reset();
  }
}
