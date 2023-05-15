import React, { useEffect, useState } from 'react';

import Header from '../components/header/Header.tsx';
import InputTodo from '../components/InputTodo.tsx';
import TodoList from '../components/TodoList.tsx';
import { getTodoList } from '../api/todo.tsx';

function Main() {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
}

export default Main;
