import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesService } from '../../shared/services/courses/courses.service';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';
import { Course } from '../../shared/models/course.model';
import { Order } from '../../shared/pipes/orderBy/order.type';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  public coursesList$: Observable<Course[]>;
  public needToDelete$: Observable<Course>;
  public isNeedNew = true;
  public nextAmountOfCourses = 3;
  public filterStatus: Order = 'asc';
  private modalRef: BsModalRef;

  @ViewChild('modal', { static: false }) modalTemplateRef: ElementRef;

  constructor(
    private courseService: CoursesService,
    private modalService: BsModalService,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {
    const breadcrumb = this.route.snapshot.data.breadcrumbs;
    this.breadcrumbsService.setBreadcrumb(breadcrumb);
  }

  ngOnInit() {
    this.coursesList$ = this.courseService
      .getCourses(this.nextAmountOfCourses)
      .pipe(map((courses: Course[]) => courses));
    this.nextAmountOfCourses += 3;
  }

  onSearch(updatedCoursesList$: Observable<Course[]>) {
    this.nextAmountOfCourses = 6;
    this.coursesList$ = updatedCoursesList$.pipe(
      map((courses: Course[]) => courses)
    );
  }

  onLoadMore(updatedCoursesList$: Observable<Course[]>) {
    this.nextAmountOfCourses += 3;
    this.coursesList$ = updatedCoursesList$.pipe(
      map((updatedCourses: Course[]) => updatedCourses)
    );
  }

  onToggleFilter() {
    this.isNeedNew = !this.isNeedNew;
    this.filterStatus = this.isNeedNew ? 'asc' : 'desc';
  }

  onDelete(deletedId: number) {
    this.needToDelete$ = this.coursesList$.pipe(
      map((courses: Course[]) => courses.find(({ id }) => id === deletedId))
    );
    this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.show(this.modalTemplateRef, {
      class: 'modal-sm'
    });
  }

  onConfirm(id: number): void {
    this.modalRef.hide();
    this.deleteCourse(id);
  }

  onDecline(): void {
    this.needToDelete$ = null;
    this.modalRef.hide();
  }

  private deleteCourse(id: number) {
    this.courseService.removeCourse(id).subscribe(data => {
      console.log(data, 'delete');
    });
    this.coursesList$ = this.courseService
      .getCourses(this.nextAmountOfCourses)
      .pipe(map((courses: Course[]) => courses));
  }
}
