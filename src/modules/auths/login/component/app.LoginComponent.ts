import {Component, OnInit} from '@angular/core';
import {User} from '../../../users/models/user';
import { LoginService } from '../services/login.service';
import {nfapply} from 'q';
import {AuthService} from '../services/auth.service';

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

  constructor(private loginService: LoginService, private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.user = new User();
  }

  public onLogin() {
    this.loginError = false;
    this.loginSuccess = false;

    this.loginService.login(this.user).subscribe((session => {
      this.authService.setAuthorizedState(session);
      this.loginSuccess = true;
    }), (error => {
      this.loginError = true;
    }));
  }
}
