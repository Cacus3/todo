import { Component } from '@angular/core';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';
import { NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm){
    let todo = new Todo(Guid.create(),form.value.title, false);
    this.todo_tasks.push(todo);
    form.resetForm();
  }
}
