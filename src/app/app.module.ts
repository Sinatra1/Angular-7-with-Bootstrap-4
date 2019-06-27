import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppLoginComponent } from '../modules/auths/login/component/app.LoginComponent';
import { AppMenuComponent } from '../modules/auths/menu/app.MenuComponent';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppLoginComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppLoginComponent,
    AppMenuComponent
  ]
})
export class AppModule { }
