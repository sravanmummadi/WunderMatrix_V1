import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {TodoItemService} from './Todo_Matrix/todo-item.service';
bootstrap(AppComponent,[TodoItemService]);