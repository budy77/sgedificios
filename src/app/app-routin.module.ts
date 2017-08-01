import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import {AppComponent} from './app.component';
const appRoutes: Routes =[
    {path:'',redirectTo:'/login',pathMatch: 'full'},
    // {path:'',redirectTo:'/automoviles/login',pathMatch: 'full'},
    // {path: 'home',component: HomeComponent},
    // {path: 'clientes',component: ClientesComponent},
    // {path: 'contactos',component: ContactosComponent},
    // //{path: 'inventario',loadChildren: () => InventarioModule},
    //{path: '**',redirectTo:'/login',pathMatch: 'full'},
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
