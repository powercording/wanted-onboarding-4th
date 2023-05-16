import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header.tsx';
import InputTodo from '../components/todo/InputTodo.tsx';
import TodoList from '../components/todo/TodoList.tsx';

import { getTodoList } from '../api/todo.tsx';
import { Todo } from '../components/todo/TodoInterface.tsx';

function Main() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodos(data);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default Main;
