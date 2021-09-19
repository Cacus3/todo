import { Component } from '@angular/core';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo_tasks: Todo[] = [
    new Todo(Guid.create(),'responsive chessboard', true),
    new Todo(Guid.create(),'to-do list app', true),
  ]
}
