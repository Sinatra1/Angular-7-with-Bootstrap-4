import {Component, OnInit} from '@angular/core';
import {User} from '../../../users/models/user';
import { LoginService } from '../../services/login.service';
import {nfapply} from 'q';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {BookService} from '../../../books/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.LoginComponent.html',
  styleUrls: ['./app.LoginComponent.scss']
})
export class AppLoginComponent implements OnInit {
  public minLength = 3;
  public user
  public loginError = false;
  public loginSuccess = false;
  public isInProccess = false;

  constructor(
    public loginService: LoginService,
    private authService: AuthService,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.user = new User();
  }

  public onLogin() {
    this.loginError = false;
    this.loginSuccess = false;
    this.isInProccess = true;

    this.loginService.login(this.user).subscribe((session => {
      this.authService.setAuthorizedState(session);
      this.loginSuccess = true;
      this.isInProccess = false;
      this.router.navigate(['/' + BookService.URL_HASH]);
    }), (error => {
      this.loginError = true;
      this.isInProccess = false;
    }));
  }
}
