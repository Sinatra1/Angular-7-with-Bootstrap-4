import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {
  public minLength = 3;
  public currentItem: User;
  public passwordTwiceModel: string;
  public showErrorMessage = false;
  public showSuccessMessage = false;
  public isInProcess = false;
  protected subscriptions = new Subscription();

  constructor(private userService: UserService) {
  }

  public ngOnInit() {
    this.currentItem = new User();
  }

  public onEdit() {
    this.isInProcess = true;
    const request = this.userService.create(this.currentItem);

    if (!request) {
      this.isInProcess = false;
      return;
    }

    this.subscriptions.add(request.subscribe((value => {
      this.isInProcess = false;
      this.showSuccessMessage = true;
    }), (error => {
      this.isInProcess = false;
      this.showErrorMessage = true;
    })));
  }

  public showPasswordTwiceError(passwordTwice, password): boolean {
    return !passwordTwice.invalid && !password.invalid && this.passwordTwiceModel !== this.currentItem.password  && (passwordTwice.dirty || passwordTwice.touched);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
