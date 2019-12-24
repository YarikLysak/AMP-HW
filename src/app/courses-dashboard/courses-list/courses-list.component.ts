import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { CourseListState } from '../../shared/models/course-state.model';
import { Course } from '../../shared/models/course.model';
import { Order } from '../../shared/pipes/orderBy/order.type';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';
import {
  getCoursesAction,
  deleteCourseAction
} from '../../shared/store/courses.actions';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  public coursesList$: Observable<Course[]> = this.store.pipe(
    select('coursesList')
  );
  public needToDelete$: Observable<Course>;
  public isNeedNew = true;
  public isCanBeMore = true;
  public nextAmountOfCourses = 3;
  public filterStatus: Order = 'asc';
  private modalRef: BsModalRef;

  @ViewChild('modal', { static: false }) modalTemplateRef: ElementRef;

  constructor(
    private store: Store<CourseListState>,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    const breadcrumb = this.route.snapshot.data.breadcrumbs;
    this.breadcrumbsService.setBreadcrumb(breadcrumb);
  }

  ngOnInit() {
    this.store.dispatch(getCoursesAction({ count: this.nextAmountOfCourses }));
  }

  // onSearch(searchString: string) {
  //   this.nextAmountOfCourses = 3;
  //   this.coursesService
  //     .searchCourses(searchString, this.nextAmountOfCourses)
  //     .subscribe((courses: Course[]) => {
  //       this.store.dispatch(getCoursesAction({ courses }));
  //     });
  // }

  onLoadMore() {
    this.nextAmountOfCourses += 3;
    this.store.dispatch(getCoursesAction({ count: this.nextAmountOfCourses }));
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
    this.store.dispatch(deleteCourseAction({ id }));
  }

  onDecline(): void {
    this.needToDelete$ = null;
    this.modalRef.hide();
  }
}
