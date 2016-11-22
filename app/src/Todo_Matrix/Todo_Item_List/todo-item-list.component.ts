import {Component, Input} from 'angular2/core';
import {TodoItemComponent} from '../Todo_Item/todo-item.component';
import {TodoItemService} from '../todo-item.service';
import {CategoryListPipe} from '../category-list.pipe';



@Component({
    selector: 'todo-item-list',
    directives: [TodoItemComponent],
    pipes: [CategoryListPipe],

    //providers: [TodoItemService],
    templateUrl: './app/src/Todo_Matrix/Todo_Item_List/todo-item-list.component.html'
    //styleUrls: ['./app/src/Todo_Item_List/todo-item-list.component.css']
})
export class TodoItemListComponent {
   @Input('category') category;

    constructor(private todoItemService1: TodoItemService) { };
    ngOnInit() {
        this.todoItems1 = this.todoItemService1.get();
        //console.log(this.todoItemService1.get());
        //console.log(this.todoItems);
    };

    todoItems1;

}