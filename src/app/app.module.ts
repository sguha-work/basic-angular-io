import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//angular dependencies
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { routing }        from './app.routing';

//my components
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],

  imports: [
    BrowserModule,
    routing
  ],

  providers: [],

  bootstrap: [
    LoginComponent
  ]
})
export class AppModule { }
