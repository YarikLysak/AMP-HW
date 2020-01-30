import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app-state.model';
import { getBreadcrums } from '../store/tools.selector';
import { clearBreadcrumbs } from '../store/tools.actions';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public crumbsArray$: Observable<string[]> = this.store.select(getBreadcrums);
  public currentPage$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.currentPage$ = this.crumbsArray$.pipe(
      map(crumbs => crumbs[crumbs.length - 1])
    );
  }

  ngOnDestroy() {
    this.store.dispatch(clearBreadcrumbs());
  }
}
