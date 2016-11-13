import {Component} from 'angular2/core';
import {TodoItemListComponent} from './Todo_Item_List/todo-item-list.component';

@Component({
    selector: 'Wunder-Matrix-app',
    directives: [TodoItemListComponent],
    templateUrl: './app/src/app.component.html',
    styleUrls: ['./app/src/app.component.css']
})
export class AppComponent {

}