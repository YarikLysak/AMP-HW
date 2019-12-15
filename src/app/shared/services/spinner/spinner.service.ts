import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isShow = new BehaviorSubject<boolean>(true);

  startStinner() {
    this.isShow.next(true);
  }

  stopSpinner() {
    this.isShow.next(false);
  }

  getSpinnerStatus(): Observable<boolean> {
    return this.isShow.asObservable();
  }
}
