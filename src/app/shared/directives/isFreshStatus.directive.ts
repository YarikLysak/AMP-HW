import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DateService } from '../services/date/date-service.service';

@Directive({
  selector: '[appIsFreshStatus]'
})
export class IsFreshStatusDirective implements OnInit {
  @Input('appIsFreshStatus') createdDate: string;

  private currentDate: string;
  private lastFreshDate: Date;
  private el: HTMLElement;

  constructor(el: ElementRef, private dateService: DateService) {
    this.el = el.nativeElement;
    this.currentDate = this.dateService.getDate().toLocaleDateString();
  }

  ngOnInit() {
    this.lastFreshDate = new Date();
    this.lastFreshDate.setDate(this.lastFreshDate.getDate() - 15);

    this.compareDateStatusClasses(
      this.currentDate,
      this.lastFreshDate,
      this.createdDate
    );
  }

  compareDateStatusClasses(today, freshDiapason, courseCreateDate) {
    const ifFresh = this.dateService.compareDate(today, courseCreateDate) === 1;
    const isInFreshDiapason =
      this.dateService.compareDate(courseCreateDate, freshDiapason) !== -1;
    const isUpcoming =
      this.dateService.compareDate(today, courseCreateDate) === -1;

    if (ifFresh && isInFreshDiapason) {
      this.el.classList.add('fresh');
    }
    if (isUpcoming) {
      this.el.classList.add('upcoming');
    }
  }
}
