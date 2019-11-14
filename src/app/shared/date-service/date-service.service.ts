import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  getCurrentDate() {
    return new Date().toLocaleDateString();
  }

  getDate() {
    return new Date();
  }

  compareDate(a, b) {
    if (new Date(a) > new Date(b)) {
      return 1;
    }
    if (new Date(a) === new Date(b)) {
      return 0;
    }
    if (new Date(a) < new Date(b)) {
      return -1;
    }
  }
}
