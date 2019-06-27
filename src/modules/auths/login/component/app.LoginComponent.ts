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
  private loginService: LoginService;
  constructor(
  ) {
    this.user = new User('', '');
  }
}
