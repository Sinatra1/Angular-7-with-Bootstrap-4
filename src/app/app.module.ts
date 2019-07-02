import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppLoginComponent } from '../modules/auths/components/login/app.LoginComponent';
import { AppMenuComponent } from '../modules/auths/components/menu/app.MenuComponent';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from '../modules/users/components/edit/edit-user.component';
import { RegComponent } from '../modules/auths/components/reg/reg.component';
import { PasswordComplexDirective } from '../modules/users/directives/password-complex.directive';
import {CookieService} from 'ngx-cookie-service';
import { ListBooksComponent } from '../modules/books/components/list/list-books.component';
import { ListComponent } from '../modules/common/components/list/list.component';

@NgModule({
  declarations: [
    AppMenuComponent,
    AppLoginComponent,
    EditUserComponent,
    RegComponent,
    PasswordComplexDirective,
    ListBooksComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    AppMenuComponent,
    AppLoginComponent,
    EditUserComponent,
    RegComponent,
    ListBooksComponent
  ],
  providers: [
    CookieService
  ],
  bootstrap: [
    AppMenuComponent
  ]
})
export class AppModule { }
