import React, { ReactNode } from 'react';
import { SearchResultBox } from './styledTodo.ts';

interface ResultBox {
  isLoading: boolean;
  children: ReactNode;
}

export default function TodoSearchResultContainer({ isLoading, children }: ResultBox) {
  if (isLoading) {
    return null;
  }
  return <SearchResultBox>{children}</SearchResultBox>;
}
