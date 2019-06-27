import {Component} from '@angular/core';
import {User} from 'user';

@Component({
  selector: 'app-root',
  templateUrl: './app.LoginComponent.html',
  styleUrls: ['./app.LoginComponent.scss']
})
export class AppLoginComponent {
  minLength = 3;
  user
  constructor(
  ) {
    this.user = new User('', '');
  }
}
