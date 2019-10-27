import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass'],
})
export class UserToolsComponent implements OnInit {
  public userLogin = 'User Login';

  constructor() {}

  ngOnInit() {}
}
