import React from 'react';
import TodoItem from './TodoItem.tsx';

import { Todo, SetTodos } from './TodoInterface.tsx';

interface TodoListType {
  todos: Todo[];
  setTodos: SetTodos;
}

function TodoList({ todos, setTodos }: TodoListType) {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
}
export default TodoList;
