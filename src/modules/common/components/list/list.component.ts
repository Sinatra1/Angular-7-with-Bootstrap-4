import {Component, OnInit} from '@angular/core';
import {Base} from '../../models/base';
import {AuthService} from '../../../auths/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public currentItem: Base;
  public titleList: string;
  public countItemsTotal = 0;
  public items = [];
  protected defaultLimit = 10;
  protected defaultOffset = 0;
  protected searchForm = {
    offset: this.defaultOffset,
    limit: this.defaultLimit,
    order_by: 'created',
    order_mode: 'asc'
  };

  constructor(protected authService: AuthService) {
  }

  ngOnInit() {
    this.init();
  }

  public init() {
    this.searchItems();
  }

  public getTitleList(): string {
    return '';
  }

  protected __getItemsQuery(params): Observable<any> {
    return null; // this.userService.getList(params);
  }

  protected __prepareItems(items) {
    return items;
  }

  public searchItems() {
    this.searchForm.offset = this.defaultOffset;
    this.searchForm.limit = this.defaultLimit;

    this.getItems(this.searchForm);

    this.getCountItemsTotal(this.searchForm);
  }

  public getItemsMore() {
    this.searchForm.offset += this.defaultLimit;
    const searchFormConst = this.searchForm;

    const request = this.__getItemsQuery(searchFormConst);

    if (!request) {
      return;
    }

    request.subscribe((list => {
      this.items = this.items.concat(this.__prepareItems(list));
    }), (error => {
      this.searchForm.offset -= this.defaultOffset;
    }));

    this.getCountItemsTotal(this.searchForm);
  }

  protected getItems(params) {
    const request = this.__getItemsQuery(params);

    if (!request) {
      return;
    }

    request.subscribe((list => {
      this.items = this.__prepareItems(list);
    }), (error => {
    }));
  }

  protected getCountItemsTotal(params) {
    const countParams = params;
    countParams.count = true;

    const request = this.__getItemsQuery(countParams);

    if (!request) {
      return;
    }

    request.subscribe((count => {
      this.countItemsTotal = parseInt(count);
    }), (error => {
    }));
  }

}
