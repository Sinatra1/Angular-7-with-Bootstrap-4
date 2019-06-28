import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppLoginComponent } from '../modules/auths/login/component/app.LoginComponent';
import { AppMenuComponent } from '../modules/auths/menu/app.MenuComponent';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from '../modules/users/edit/edit-user.component';

@NgModule({
  declarations: [
    AppMenuComponent,
    AppLoginComponent,
    EditUserComponent
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
    EditUserComponent
  ],
  providers: [],
  bootstrap: [
    AppLoginComponent
  ]
})
export class AppModule { }
