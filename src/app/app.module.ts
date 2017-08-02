import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {AccordionModule} from 'primeng/primeng';


import {HomeModule} from './home/home.module';

import {LoginModule} from './login/login.module';



//nota este modulo de routing del AppComponent debe ser importado al ultimo de lo contrario causa error al cargar la ruta 404 ** siempre
import {AppRoutinModule} from './app-route/app-routin.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  exports: [
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    
    LoginModule,
    HomeModule,

    AppRoutinModule,//estemodulo siempre al final para evitar errores con ** route
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
