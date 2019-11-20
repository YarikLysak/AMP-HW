import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { CoursesService } from '../shared/services/courses.service';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  public coursesList: Course[];
  public fromNew = 'new';
  public fromOld = 'old';
  private needToDelete: Course = null;
  private modalRef: BsModalRef;

  @ViewChild('modal', { static: false }) modalTemplateRef: ElementRef;

  constructor(
    private courseService: CoursesService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.coursesList = this.courseService.getCourses();
  }

  showFiltered(filteredCoursesList: Course[]) {
    this.coursesList = filteredCoursesList;
  }

  onDelete(deletedId: number) {
    this.needToDelete = this.coursesList.find(({ id }) => id === deletedId);
    this.openModal();
  }

  private deleteCourse(id: number) {
    this.coursesList = this.courseService.removeCourse(id);
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
}
