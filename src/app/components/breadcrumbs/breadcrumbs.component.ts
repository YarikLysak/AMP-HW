import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass'],
})
export class BreadcrumbsComponent implements OnInit {
  public crumbsArray = ['Courses'];
  public currentPage = 'Courses';

  constructor() {}

  ngOnInit() {}
}
