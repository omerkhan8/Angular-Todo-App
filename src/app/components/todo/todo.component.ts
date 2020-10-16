import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}

  addItem(todo: Todo) {
    this.todos.push(todo);
  }

  removeItem(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
