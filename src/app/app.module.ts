import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
