import {Component} from '@angular/core';
import {User} from '../../../users/models/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.LoginComponent.html',
  styleUrls: ['./app.LoginComponent.scss']
})
export class AppLoginComponent {
  minLength = 3;
  user
  loginError = false;
  loginSuccess = false;
  constructor(private loginService: LoginService) {
    this.user = new User('', '');
  }
  onLogin() {
    this.loginError = false;
    this.loginSuccess = false;
    this.loginService.login(this.user).subscribe((value => {
      this.loginSuccess = true;
    }), (error => {
      this.loginError = true;
    }));
  }
}
