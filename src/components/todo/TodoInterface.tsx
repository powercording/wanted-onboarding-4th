import React from 'react';

export interface TodoTitle {
  title: string;
}

export interface Todo {
  id: number;
  title: string;
}

export type SetTodos = React.Dispatch<React.SetStateAction<Todo[]>>;
