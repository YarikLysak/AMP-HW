import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { AuthService } from '../../auth/shared/services/auth.service';
import { User } from '../../auth/shared/models/user.model';

@Component({
  selector: 'app-user-tools',
  templateUrl: './user-tools.component.html',
  styleUrls: ['./user-tools.component.sass']
})
export class UserToolsComponent implements OnInit, OnDestroy {
  public userEmail: string;
  public subscription: Subscription;
  public isAuth$: Observable<boolean>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.isAuth$ = this.auth.isAuthenticated();
    this.subscription = this.auth
      .getUserInfo()
      .subscribe(user => (this.userEmail = user.email));
  }

  onLogOff() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
