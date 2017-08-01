import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import {AppComponent} from './app.component';
const appRoutes: Routes =[
    {path:'',redirectTo:'/',pathMatch: 'full'},
    // {path:'',redirectTo:'/automoviles/login',pathMatch: 'full'},
    // {path: 'home',component: HomeComponent},
    // {path: 'clientes',component: ClientesComponent},
    // {path: 'contactos',component: ContactosComponent},
    // //{path: 'inventario',loadChildren: () => InventarioModule},
    // {path: '**',component: HomeComponent},
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
