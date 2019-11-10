import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DateService } from 'src/app/shared/date-service/date-service.service';

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
    this.lastFreshDate = this.dateService.getDate();
    this.currentDate = this.dateService.getDate().toLocaleDateString();
  }

  ngOnInit() {
    this.lastFreshDate.setDate(this.lastFreshDate.getDate() - 15);

    if (
      this.dateService.compareDate(
        new Date(this.currentDate),
        new Date(this.createdDate)
      ) === 1 &&
      this.dateService.compareDate(
        new Date(this.createdDate),
        new Date(this.lastFreshDate)
      ) !== -1
    ) {
      this.el.classList.add('fresh');
    }
    if (
      this.dateService.compareDate(
        new Date(this.createdDate),
        new Date(this.currentDate)
      ) === 1
    ) {
      this.el.classList.add('upcoming');
    }
  }
}
