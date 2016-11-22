import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-item',
    templateUrl: './app/src/Todo_Matrix/Todo_Item/todo-item.component.html',
    styleUrls: ['./app/src/Todo_Matrix/Todo_Item/todo-item.component.css']
})
export class TodoItemComponent {
    @Input('todoToFinish') todoItem1;
    
}