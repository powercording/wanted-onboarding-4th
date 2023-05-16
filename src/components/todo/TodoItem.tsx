import React from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa';

import { SetTodos } from './TodoInterface.tsx';
import useTodo from '../../hooks/useTodoApi.tsx';

interface TodoItemsType {
  id: number;
  title: string;
  setTodos: SetTodos;
}

function TodoItem({ id, title, setTodos }: TodoItemsType) {
  const { clearTodo, isLoading } = useTodo(setTodos);

  const handleRemoveTodo = async () => {
    await clearTodo(id);
  };

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button type="button" onClick={handleRemoveTodo}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
}

export default TodoItem;
