import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ToDo} from './components/todo/todo.component';
import {ToDoAdd} from './components/todo/todo-add/todo-add.component';

@NgModule({
  declarations: [
    ToDoAdd,
    ToDo    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ToDo]
})
export class AppModule { }
