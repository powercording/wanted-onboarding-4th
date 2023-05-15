import { useState } from 'react';
import { Todo } from '../components/todo/TodoInterface.tsx';

export default function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, isLoading] = useState(false);

  const addTodo = async () => {};
  const deleteTodo = async () => {};

  return {
    todos,
    addTodo,
    deleteTodo,
    isLoading,
  };
}
