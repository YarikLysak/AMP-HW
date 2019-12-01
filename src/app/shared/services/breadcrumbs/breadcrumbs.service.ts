import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  breadcrumbsArray;
  breadcrumbs: Subject<[]> = new Subject();

  getBreadcrumbs(): Observable<[]> {
    return this.breadcrumbs.asObservable();
  }

  setBreadcrumb(breadcrumb: string, title?: string) {
    this.breadcrumbsArray = breadcrumb.split('/');
    if (title !== undefined) {
      this.breadcrumbsArray[this.breadcrumbsArray.length - 1] = ` ${title}`;
    }
    this.breadcrumbs.next(this.breadcrumbsArray);
  }
}
