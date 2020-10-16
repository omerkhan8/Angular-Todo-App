import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  content: string;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    let data: Todo = {
      id: parseInt((Math.random() * 1000).toFixed(0)),
      content: this.content,
      completed: false,
    };
    if (this.content.length) {
      this.addTodo.emit(data);
      this.content = '';
    }
  }
}
