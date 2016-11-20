import {Component} from 'angular2/core';
import {TodoQuadrant} from './Todo_Matrix/Quadrant/quad.component';
import {TodoItemInput} from './Todo_Matrix/Todo_Input/todo-input.component';

@Component({
    selector: 'Wunder-Matrix-app',
    directives: [TodoQuadrant,TodoItemInput],
    templateUrl: './app/src/app.component.html',
    styleUrls: ['./app/src/app.component.css']
})
export class AppComponent {

}