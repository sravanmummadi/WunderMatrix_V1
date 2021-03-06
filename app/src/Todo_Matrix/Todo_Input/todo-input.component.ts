import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Control, Validators, FormBuilder} from 'angular2/common';
import {TodoItemService} from '../todo-item.service';

@Component({
    selector: 'todo-input',
    templateUrl: './app/src/Todo_Matrix/Todo_Input/todo-input.component.html',
    styleUrls: ['./app/src/Todo_Matrix/Todo_Input/todo-input.component.css']
    })
/*
export class TodoItemInput {
    form;
    
}
*/

export class TodoItemFormComponent {
    form;
    
    constructor(private formBuilder: FormBuilder,
        private todoItemService: TodoItemService
        ) {}
    ngOnInit() {
        this.form = this.formBuilder.group({
            'name': new Control(''),
            'category':new Control('URG_IMP')
        });
    }
    onSubmit(todoItem) {
        
        this.todoItemService.add(todoItem);
        console.log("sucessfully added model drivern forms")
    }
    
}