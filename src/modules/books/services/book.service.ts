import { Injectable } from '@angular/core';
import {ApiService} from '../../common/services/api.service';
import {Observable} from 'rxjs';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  public static URL_HASH = 'books';
  public static TITLE_LIST = 'Books';

  constructor(private apiService: ApiService) { }

  public getUrlHash(): string {
    return BookService.URL_HASH;
  }

  public getTitleList(): string {
    return BookService.TITLE_LIST;
  }

  public getList(params): Observable<Book[] | number> {
    return this.apiService.get(BookService.URL_HASH, params);
  }
}
