import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  public titleList: string;
  public countItemsTotal = 0;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.titleList = this.bookService.getTitleList();
  }

}
