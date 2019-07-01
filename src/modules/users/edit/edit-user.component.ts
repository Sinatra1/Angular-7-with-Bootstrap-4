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
  public showErrorMessage = false;
  public showSuccessMessage = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.currentItem = new User();
  }

  onEdit() {
    const request = this.userService.create(this.currentItem);

    if (!request) {
      return;
    }

    request.subscribe((value => {
      this.showSuccessMessage = true;
    }), (error => {
      this.showErrorMessage = true;
    }));
  }
}
