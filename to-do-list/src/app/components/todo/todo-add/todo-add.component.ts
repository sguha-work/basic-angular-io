import {Component} from '@angular/core';

@Component({
    selector:"todo-add",
    templateUrl: "todo-add.template.html"
})
export class ToDoAdd {
    public model: any;
    constructor() {
        this.model = {};
    }
}