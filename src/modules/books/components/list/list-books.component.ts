import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {ListComponent} from '../../../common/components/list/list.component';
import {AuthService} from '../../../auths/services/auth.service';
import {Router} from '@angular/router';
import {AppConfig} from '../../../../app/app-config';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent extends ListComponent implements OnInit {

  constructor(
    public bookService: BookService,
    public authService: AuthService,
    private router: Router) {
    super(authService);

    if (!authService.isAuth()) {
      this.router.navigate([AppConfig.PRELOGIN]);
      return;
    }
  }

  ngOnInit() {
    this.init();
  }

  public getTitleList() {
    return this.bookService.getTitleList();
  }

  protected __getItemsQuery(params): Observable<any> {
    const paramsCopy = params;
    return this.bookService.getList(paramsCopy);
  }
}
