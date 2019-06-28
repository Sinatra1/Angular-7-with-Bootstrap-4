import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  currentItem;

  constructor() { }

  ngOnInit() {
    this.currentItem = new User();
  }

  onEdit() {

  }
}
