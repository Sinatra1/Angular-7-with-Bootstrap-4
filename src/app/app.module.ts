import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppLoginComponent } from '../modules/auths/login/app.LoginComponent';
import { AppMenuComponent } from '../modules/auths/menu/app.MenuComponent';

@NgModule({
  declarations: [
    AppLoginComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppLoginComponent,
    AppMenuComponent
  ]
})
export class AppModule { }
