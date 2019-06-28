import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppLoginComponent} from '../modules/auths/login/component/app.LoginComponent';
import {RegComponent} from '../modules/auths/reg/component/reg.component';

const routes: Routes = [
  {path: '', component: AppLoginComponent},
  {path: 'reg', component: RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
