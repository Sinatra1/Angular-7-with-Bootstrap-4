import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppLoginComponent} from '../modules/auths/login/component/app.LoginComponent';
import {EditUserComponent} from '../modules/users/edit/edit-user.component';

const routes: Routes = [
  {path: '', component: AppLoginComponent},
  {path: 'reg', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
