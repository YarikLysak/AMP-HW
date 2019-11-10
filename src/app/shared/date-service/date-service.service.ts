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
    // 1, a > б
    // 0, a = b
    // -1, a < б

    const left: any = a > b;
    const right: any = a < b;
    return isFinite((a = this.convert(a).valueOf())) &&
      isFinite((b = this.convert(b).valueOf()))
      ? left - right
      : NaN;
  }

  private convert(d) {
    return d.constructor === Date
      ? d
      : d.constructor === Array
      ? new Date(d[0], d[1], d[2])
      : d.constructor === Number
      ? new Date(d)
      : d.constructor === String
      ? new Date(d)
      : typeof d === 'object'
      ? new Date(d.year, d.month, d.date)
      : NaN;
  }
}
