import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BreadcrumbsService } from 'src/app/shared/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public crumbsArray: string[];
  public currentPage: string;
  private sub: Subscription;

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit() {
    this.sub = this.breadcrumbsService.getBreadcrumbs().subscribe(data => {
      this.crumbsArray = data;
      this.currentPage = this.crumbsArray[this.crumbsArray.length - 1];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
