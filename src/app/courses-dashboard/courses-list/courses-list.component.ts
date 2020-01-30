import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../../store/app-state.model';
import { Course } from '../shared/models/course.model';
import { Order } from '../../shared/pipes/orderBy/order.type';
import {
  getCourses,
  deleteCourse,
  getSearched
} from '../store/courses.actions';
import { setBreadcrumbs } from '../../core/store/tools.actions';
import { getCoursesList } from '../store/courses.selectors';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  public coursesList$: Observable<Course[]> = this.store.select(getCoursesList);
  public needToDelete$: Observable<Course>;
  public isNeedNew = true;
  public isCanBeMore = true;
  public nextAmountOfCourses = 3;
  public filterStatus: Order = 'asc';
  private modalRef: BsModalRef;

  @ViewChild('modal', { static: false }) modalTemplateRef: ElementRef;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {
    const breadcrumb = this.route.snapshot.data.breadcrumbs;
    this.store.dispatch(setBreadcrumbs({ breadcrumb }));
  }

  ngOnInit() {
    this.store.dispatch(getCourses({ count: this.nextAmountOfCourses }));
  }

  onSearch(searchString: string) {
    this.nextAmountOfCourses = 3;
    this.store.dispatch(
      getSearched({ searchString, count: this.nextAmountOfCourses })
    );
  }

  onLoadMore() {
    this.nextAmountOfCourses += 3;
    this.store.dispatch(getCourses({ count: this.nextAmountOfCourses }));
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
    this.store.dispatch(deleteCourse({ id }));
  }

  onDecline(): void {
    this.needToDelete$ = null;
    this.modalRef.hide();
  }
}
