import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {TodoItemListComponent} from '../Todo_Item_List/todo-item-list.component';


@Component({
    selector: 'todo-quadrant',
    directives: [TodoItemListComponent],
  
    templateUrl: './app/src/Todo_Matrix/Quadrant/quad.component.html',
    styleUrls: ['./app/src/Todo_Matrix/Quadrant/quad.component.css']
})
export class TodoQuadrant {
    @Input('quadrant1') quadrant;    
   
    
}