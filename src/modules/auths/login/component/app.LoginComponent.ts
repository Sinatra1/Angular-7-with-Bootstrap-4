import {Component, OnInit} from '@angular/core';
import {User} from '../../../users/models/user';
import { LoginService } from '../services/login.service';
import {nfapply} from 'q';

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

  constructor(private loginService: LoginService) {
  }

  public ngOnInit(): void {
    this.user = new User();
  }

  public onLogin() {
    this.loginError = false;
    this.loginSuccess = false;

    this.loginService.login(this.user).subscribe((value => {
      this.loginSuccess = true;
    }), (error => {
      this.loginError = true;
    }));
  }
}
