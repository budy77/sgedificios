import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {NotFoundComponent} from '../not-found/not-found.component';
const appRoutes: Routes =[

    {path:'',redirectTo:'/login',pathMatch: 'full'},
    {path:'404',component:NotFoundComponent},
    {path: '**',redirectTo:'/404'}
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
export class AppRoutinModule { }
