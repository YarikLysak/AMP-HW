import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  public searchField = new FormControl('');

  searchCourse() {
    console.log(this.searchField.value, '/searched data');
  }
}
