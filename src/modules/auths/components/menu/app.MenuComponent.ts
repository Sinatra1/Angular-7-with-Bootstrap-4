import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.MenuComponent.html',
  styleUrls: ['./app.MenuComponent.scss']
})
export class AppMenuComponent implements OnInit {

  constructor(public authService: AuthService, public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

}
