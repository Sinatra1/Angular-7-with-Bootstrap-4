import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  public static URL_HASH = 'books';
  public static TITLE_LIST = 'Books';

  constructor() { }

  public getUrlHash(): string {
    return BookService.URL_HASH;
  }

  public getTitleList(): string {
    return BookService.TITLE_LIST;
  }
}
