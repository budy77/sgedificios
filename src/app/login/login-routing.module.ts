import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes =[

    // {path:'',redirectTo:'/automoviles/login',pathMatch: 'full'},
    {path: 'login',component: LoginComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class LoginRoutingModule { }