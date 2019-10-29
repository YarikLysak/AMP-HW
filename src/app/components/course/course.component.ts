import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  // OnChanges,
  // DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
})
// OnChanges,
// DoCheck,
export class CourseComponent
  implements
    OnInit,
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

  // ngOnChanges() {
  //   console.log('OnChanges'); // commented because of lint error
  // }
  // ngDoCheck() {
  //   console.log('DoCheck'); // commented because of lint error
  // }
  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('OnDestroy');
  }

  onDelete() {
    this.deleted.emit(this.course.id);
  }
}
