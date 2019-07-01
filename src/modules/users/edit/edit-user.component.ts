import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public minLength = 3;
  public currentItem: User;
  public passwordTwiceModel: string;
  public showErrorMessage = false;
  public showSuccessMessage = false;
  public isInProccess = false;

  constructor(private userService: UserService) {
  }

  public ngOnInit() {
    this.currentItem = new User();
  }

  public onEdit() {
    this.isInProccess = true;
    const request = this.userService.create(this.currentItem);

    if (!request) {
      this.isInProccess = false;
      return;
    }

    request.subscribe((value => {
      this.isInProccess = false;
      this.showSuccessMessage = true;
    }), (error => {
      this.isInProccess = false;
      this.showErrorMessage = true;
    }));
  }

  public showPasswordTwiceError(passwordTwice, password): boolean {
    return !passwordTwice.invalid && !password.invalid && this.passwordTwiceModel !== this.currentItem.password  && (passwordTwice.dirty || passwordTwice.touched);
  }
}
