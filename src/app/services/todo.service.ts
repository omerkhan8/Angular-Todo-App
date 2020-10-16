import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Array<Todo> {
    return [
      {
        id: 1,
        content: 'first',
        completed: false,
      },
      {
        id: 2,
        content: 'second',
        completed: false,
      },
      {
        id: 3,
        content: 'third',
        completed: false,
      },
    ];
  }
}
