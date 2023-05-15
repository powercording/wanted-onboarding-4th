import { useState } from 'react';
import { SetTodos, Todo } from '../components/todo/TodoInterface.tsx';
import { createTodo, deleteTodo } from '../api/todo.tsx';

export default function useTodo(setTodos: SetTodos) {
  const [isLoading, setIsLoading] = useState(false);

  const addTodo = async ({ todoTitle }: { todoTitle: string }) => {
    setIsLoading(() => true);

    const title = todoTitle.trim();
    if (!title) {
      return alert('Please write something');
    }

    const { data: newTodo } = await createTodo({ title }).finally(() => setIsLoading(() => false));
    setTodos((prev: Todo[]) => [...prev, newTodo]);

    return null;
  };

  const clearTodo = async (id: number) => {
    setIsLoading(() => true);

    await deleteTodo(id).finally(() => setIsLoading(() => false));
    setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id));
  };

  return {
    addTodo,
    clearTodo,
    isLoading,
  };
}
