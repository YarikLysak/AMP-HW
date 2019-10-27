import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})
export class CourseComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {
  @Input()
  course;

  @Output()
  deleted = new EventEmitter<number>();

  constructor() {}

  OnChanges() {
    console.log('OnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  AfterContentInit() {
    console.log('AfterContentInit');
  }
  AfterContentChecked() {
    console.log('AfterContentChecked');
  }
  AfterViewInit() {
    console.log('AfterViewInit');
  }
  AfterViewChecked() {
    console.log('AfterViewChecked');
  }
  OnDestroy() {
    console.log('OnDestroy');
  }

  onDelete() {
    this.deleted.emit(this.course.id);
  }
}
