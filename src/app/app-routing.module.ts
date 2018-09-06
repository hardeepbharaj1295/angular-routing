import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';4
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import{ NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '',component: DashboardComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'login',component: LoginComponent},
  {path: '**',component:NotFoundComponent}
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
