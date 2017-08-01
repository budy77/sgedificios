import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/primeng';

import {AppRoutinModule} from './app-routin.module';

import {LoginModule} from './login/login.module';

import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AccordionModule,
    AppRoutinModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
