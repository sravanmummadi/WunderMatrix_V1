import {Component} from 'angular2/core';
import {TodoItemComponent} from '../Todo_Item/todo-item.component';

@Component({
    selector: 'todo-item-list',
    directives: [TodoItemComponent],
    templateUrl: './app/src/Todo_Item_List/todo-item-list.component.html',
    //styleUrls: ['./app/src/Todo_Item_List/todo-item-list.component.css']
})
export class TodoItemListComponent {

    onMediaItemDeleted(mediaItem) {
    }
    
    todoItems = [
        {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: "The Small Tall",
            medium: "Movies",
            category: "Comedy",
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: "The Redemption",
            medium: "Movies",
            category: "Action",
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: "Hoopers",
            medium: "Series",
            category: "Drama",
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: "Happy Joe: Cheery Road",
            medium: "Movies",
            category: "Action",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        }
    ];
}