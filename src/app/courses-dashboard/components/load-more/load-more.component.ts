import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent {
  @Output() updatedCoursesList = new EventEmitter<void>();

  loadMore() {
    this.updatedCoursesList.emit();
    console.log('load more');
  }
}
