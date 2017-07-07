import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//angular dependencies
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { routing }        from './app.routing';
import { FormsModule } from '@angular/forms';

//my components
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
