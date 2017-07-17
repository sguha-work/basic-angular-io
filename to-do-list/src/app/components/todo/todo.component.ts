import {Component} from '@angular/core';
import {ToDoAdd} from './todo-add/todo-add.component';
@Component({
    templateUrl: "todo.template.html",
    selector: "todo"
})
export class ToDo {
    constructor(){
        alert("todo");
    }
}