import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  searchForm = new FormGroup({
    searchField: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.searchForm.value.searchField, 'searched data');
  }
}
