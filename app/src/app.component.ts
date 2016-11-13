import {Component} from 'angular2/core';
import {TodoQuadrant} from './Todo_Matrix/Quadrant/quad.component';

@Component({
    selector: 'Wunder-Matrix-app',
    directives: [TodoQuadrant],
    templateUrl: './app/src/app.component.html',
    styleUrls: ['./app/src/app.component.css']
})
export class AppComponent {

}