import {Component} from 'angular2/core';
import {TodoQuadrant} from './Todo_Matrix/Quadrant/quad.component';
import {TodoItemFormComponent} from './Todo_Matrix/Todo_Input/todo-input.component';
import {TodoItemService} from './Todo_Matrix/todo-item.service';
import {TodoItemListComponent} from './Todo_Matrix/Todo_Item_List/todo-item-list.component';


@Component({
    selector: 'Wunder-Matrix-app',
    directives: [TodoQuadrant,TodoItemFormComponent,TodoItemListComponent],
    templateUrl: './app/src/app.component.html',
    providers: [TodoItemService],
    styleUrls: ['./app/src/app.component.css'],
    
})
export class AppComponent {

}