import {Component} from 'angular2/core';
import {TodoItemComponent} from '../Todo_Item/todo-item.component';
import {TodoItemService} from '../todo-item.service';


@Component({
    selector: 'todo-item-list',
    directives: [TodoItemComponent],
    providers: [TodoItemService],
    templateUrl: './app/src/Todo_Matrix/Todo_Item_List/todo-item-list.component.html',
    //styleUrls: ['./app/src/Todo_Item_List/todo-item-list.component.css']
})
export class TodoItemListComponent {

    constructor(private todoItemService: TodoItemService) {};
    ngOnInit() {
        this.todoItems = this.todoItemService.get();
    };
    
    todoItems;
    
}