import React, { useCallback, useState } from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa';
import { deleteTodo } from '../api/todo.tsx';

interface TodoItemType {
  id: number;
  title: string;
}

interface TodoItemsType {
  id: number;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
}

function TodoItem({ id, title, setTodos }: TodoItemsType) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos((prev: TodoItemType[]) => prev.filter((item: TodoItemType) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button type="button" onClick={() => handleRemoveTodo()}>
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
