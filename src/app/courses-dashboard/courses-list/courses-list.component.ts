import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ElementRef
} from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

import { Course } from '../shared/course.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  public coursesList: Course[];
  public fromNew = 'new';
  public fromOld = 'old';
  private modalRef: BsModalRef;
  private deleteId: number;

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

  onDelete(id: number) {
    this.deleteId = id;
    this.openModal();
  }

  private deleteCourse(id: number) {
    this.coursesList = this.courseService.removeCourse(id);
  }

  private openModal() {
    this.modalRef = this.modalService.show(this.modalTemplateRef, {
      class: 'modal-sm'
    });
  }

  private confirm(): void {
    this.modalRef.hide();
    this.deleteCourse(this.deleteId);
  }

  private decline(): void {
    this.deleteId = undefined;
    this.modalRef.hide();
  }
}
