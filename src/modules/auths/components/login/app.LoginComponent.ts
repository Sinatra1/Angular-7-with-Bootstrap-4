import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../users/models/user';
import {LoginService} from '../../services/login.service';
import {nfapply} from 'q';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {BookService} from '../../../books/services/book.service';
import {AppConfig} from '../../../../app/app-config';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.LoginComponent.html',
  styleUrls: ['./app.LoginComponent.scss']
})
export class AppLoginComponent implements OnInit, OnDestroy {
  public minLength = 3;
  public user;
  public loginError = false;
  public loginSuccess = false;
  public isInProcess = false;
  protected subscriptions = new Subscription();

  constructor(
    public loginService: LoginService,
    private authService: AuthService,
    private router: Router) {

    if (authService.isAuth()) {
      this.router.navigate(['/' + BookService.URL_HASH]);
      return;
    }
  }

  public ngOnInit(): void {
    this.user = new User();
  }

  public onLogin() {
    this.loginError = false;
    this.loginSuccess = false;
    this.isInProcess = true;

    this.subscriptions.add(this.loginService.login(this.user).subscribe((session => {
      this.authService.setAuthorizedState(session);
      this.loginSuccess = true;
      this.isInProcess = false;
      this.router.navigate(['/' + BookService.URL_HASH]);
    }), (error => {
      this.loginError = true;
      this.isInProcess = false;
    })));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
