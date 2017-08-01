import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/primeng';

import {AppRoutinModule} from './app-routin.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AccordionModule,
    AppRoutinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
