import { Component, ViewChild, ElementRef } from '@angular/core';
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
export class CoursesListComponent {
  public coursesList$: Observable<Course[]>;
  public needToDelete$: Observable<Course>;
  public isNeedNew = true;
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
    this.coursesList$ = this.courseService
      .getCourses()
      .pipe(map((courses: Course[]) => courses));
  }

  onDelete(deletedId: number) {
    this.needToDelete$ = this.coursesList$.pipe(
      map((courses: Course[]) => courses.find(({ id }) => id === deletedId))
    );
    this.openModal();
  }

  private deleteCourse(id: number) {
    this.courseService.removeCourse(id);
  }

  toggleFilter() {
    this.isNeedNew = !this.isNeedNew;
    this.filterStatus = this.isNeedNew ? 'asc' : 'desc';
  }

  openModal() {
    this.modalRef = this.modalService.show(this.modalTemplateRef, {
      class: 'modal-sm'
    });
  }

  confirm(id: number): void {
    this.modalRef.hide();
    this.deleteCourse(id);
  }

  decline(): void {
    this.needToDelete$ = null;
    this.modalRef.hide();
  }
}
