import { useState } from 'react';
import { SetTodos, Todo } from '../components/todo/TodoInterface.tsx';
import { createTodo, deleteTodo } from '../api/todo.tsx';

export default function useTodo(setTodos: SetTodos) {
  const [isLoading, setIsLoading] = useState(false);

  const addTodo = async ({ todoTitle }: { todoTitle: string }) => {
    setIsLoading(() => true);

    try {
      const title = todoTitle.trim();

      if (!title) {
        return alert('Please write something');
      }

      const { data: newTodo } = await createTodo({ title });
      setTodos((prev: Todo[]) => [...prev, newTodo]);
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(() => false);
    }
    return null;
  };

  const clearTodo = async (id: number) => {
    setIsLoading(() => true);

    try {
      await deleteTodo(id);
      setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(() => false);
    }
  };

  return {
    addTodo,
    clearTodo,
    isLoading,
  };
}
