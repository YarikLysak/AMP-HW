import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  breadcrumbsArray: string[] = [];
  breadcrumbs: BehaviorSubject<string[]> = new BehaviorSubject(
    this.breadcrumbsArray
  );

  getBreadcrumbs(): Observable<string[]> {
    return this.breadcrumbs.asObservable();
  }

  setBreadcrumb(breadcrumb: string, title?: string) {
    const isInArray = this.breadcrumbsArray.indexOf(breadcrumb) !== -1;
    const isFirstInArray = this.breadcrumbsArray.indexOf(breadcrumb) === 0;

    if (title !== undefined) {
      breadcrumb = `${breadcrumb} ${title}`;
    }
    if (isInArray && !isFirstInArray) {
      this.breadcrumbsArray = [...this.breadcrumbsArray].slice(
        this.breadcrumbsArray.indexOf(breadcrumb)
      );
    } else if (isFirstInArray) {
      this.breadcrumbsArray = [breadcrumb];
    } else {
      this.breadcrumbsArray.push(breadcrumb);
    }
    this.breadcrumbs.next(this.breadcrumbsArray);
  }

  removeBreadcrumbs() {
    this.breadcrumbsArray = [];
    this.breadcrumbs.next(this.breadcrumbsArray);
  }
}
