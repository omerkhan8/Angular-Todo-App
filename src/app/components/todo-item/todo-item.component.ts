import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() removeItem: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  todoClasses() {
    return {
      'todo-item': true,
      'todo-completed': this.todo.completed,
    };
  }

  onToggle() {
    this.todo.completed = !this.todo.completed;
  }

  onDelete() {
    this.removeItem.emit(this.todo.id);
  }
}
