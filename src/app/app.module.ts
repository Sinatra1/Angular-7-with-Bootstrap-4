import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppLoginComponent } from '../modules/auths/login/component/app.LoginComponent';
import { AppMenuComponent } from '../modules/auths/menu/app.MenuComponent';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from '../modules/users/edit/edit-user.component';
import { RegComponent } from '../modules/auths/reg/component/reg.component';
import { PasswordComplexDirective } from '../modules/users/directives/password-complex.directive';

@NgModule({
  declarations: [
    AppMenuComponent,
    AppLoginComponent,
    EditUserComponent,
    RegComponent,
    PasswordComplexDirective
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
    RegComponent
  ],
  providers: [],
  bootstrap: [
    AppMenuComponent
  ]
})
export class AppModule { }
