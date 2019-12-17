import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Course } from '../../shared/models/course.model';
import { Order } from '../../shared/pipes/orderBy/order.type';
import { CoursesService } from '../../shared/services/courses/courses.service';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  public coursesList$: Observable<Course[]>;
  public needToDelete$: Observable<Course>;
  public isNeedNew = true;
  public isCanBeMore = true;
  public nextAmountOfCourses = 3;
  public filterStatus: Order = 'asc';
  private modalRef: BsModalRef;

  @ViewChild('modal', { static: false }) modalTemplateRef: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private coursesService: CoursesService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    const breadcrumb = this.route.snapshot.data.breadcrumbs;
    this.breadcrumbsService.setBreadcrumb(breadcrumb);
  }

  ngOnInit() {
    this.coursesList$ = this.coursesService
      .getCourses(this.nextAmountOfCourses)
      .pipe(
        map((courses: Course[]) => {
          return courses;
        })
      );
  }

  onSearch(searchString: string) {
    this.nextAmountOfCourses = 3;
    this.coursesList$ = this.coursesService
      .searchCourses(searchString, this.nextAmountOfCourses)
      .pipe(
        map((courses: Course[]) => {
          return courses;
        })
      );
  }

  onLoadMore() {
    this.nextAmountOfCourses += 3;
    this.coursesList$ = this.coursesService
      .loadMoreCourses(this.nextAmountOfCourses)
      .pipe(
        map((updatedCourses: Course[]) => {
          this.isCanBeMore = updatedCourses.length >= this.nextAmountOfCourses;
          return updatedCourses;
        })
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
    this.coursesService.removeCourse(id).subscribe(() => {
      this.coursesList$ = this.coursesService
        .getCourses(this.nextAmountOfCourses)
        .pipe(
          map((courses: Course[]) => {
            return courses;
          })
        );
    });
  }
}
