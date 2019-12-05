import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { BreadcrumbsService } from '../../shared/services/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public crumbsArray$: Observable<string[]>;
  public currentPage$: Observable<string>;

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  ngOnInit() {
    this.crumbsArray$ = this.breadcrumbsService.getBreadcrumbs();
    this.currentPage$ = this.breadcrumbsService
      .getBreadcrumbs()
      .pipe(map(crumbs => crumbs[crumbs.length - 1]));
  }

  ngOnDestroy() {
    this.breadcrumbsService.removeBreadcrumbs();
  }
}
