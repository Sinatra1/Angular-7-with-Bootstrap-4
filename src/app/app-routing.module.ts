import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppLoginComponent} from '../modules/auths/components/login/app.LoginComponent';
import {RegComponent} from '../modules/auths/components/reg/reg.component';
import {ListBooksComponent} from '../modules/books/components/list/list-books.component';
import {BookService} from '../modules/books/services/book.service';

const routes: Routes = [
  {path: '', component: AppLoginComponent},
  {path: 'reg', component: RegComponent},
  {path: BookService.URL_HASH, component: ListBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
