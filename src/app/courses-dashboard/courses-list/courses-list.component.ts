import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from '../../shared/services/courses/courses.service';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';
import { Course } from '../../shared/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesList: Course[];
  public isNeedNew = true;
  public filterStatus = 'last';
  public needToDelete: Course = null;
  private modalRef: BsModalRef;
  private sub: Subscription[] = [];

  @ViewChild('modal', { static: false }) modalTemplateRef: ElementRef;

  constructor(
    private courseService: CoursesService,
    private modalService: BsModalService,
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {
    const breadcrumb = this.route.snapshot.data.breadcrumbs;
    this.breadcrumbsService.setBreadcrumb(breadcrumb);
    this.courseService.getCourses().subscribe(courses => {
      this.coursesList = courses;
    });
  }

  ngOnInit() {
    this.sub.push();
  }

  showFiltered(filteredCoursesList: Course[]) {
    this.coursesList = filteredCoursesList;
  }

  onDelete(deletedId: number) {
    this.needToDelete = this.coursesList.find(({ id }) => id === deletedId);
    this.openModal();
  }

  private deleteCourse(id: number) {
    this.courseService.removeCourse(id);
  }

  toggleFilter() {
    this.isNeedNew = !this.isNeedNew;
    this.filterStatus = this.isNeedNew ? 'last' : 'first';
  }

  openModal() {
    this.modalRef = this.modalService.show(this.modalTemplateRef, {
      class: 'modal-sm'
    });
  }

  confirm(): void {
    this.modalRef.hide();
    this.deleteCourse(this.needToDelete.id);
  }

  decline(): void {
    this.needToDelete = null;
    this.modalRef.hide();
  }

  ngOnDestroy() {
    this.sub.forEach(obs => obs.unsubscribe());
  }
}
