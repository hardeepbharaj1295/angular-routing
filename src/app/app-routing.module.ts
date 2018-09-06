import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';4
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'dashboard',component: DashboardComponent},
  {path: 'login',component: LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
