import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './login/login/login.component';
import { CadloginComponent } from './login/cadlogin/cadlogin.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch: 'full'},
  {path:"login", component: LoginComponent},
  {path:"cadLogin", component: CadloginComponent},
  {path: "admin", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
