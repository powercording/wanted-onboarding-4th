import React, { ReactNode } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { SearchResultBox, MoreIndicator } from './styledTodo.ts';

interface ResultBox {
  isLoading: boolean;
  isIntersecting: boolean;
  children: ReactNode;
}
export default function TodoSearchResultContainer({
  isLoading,
  children,
  isIntersecting,
}: ResultBox) {
  if (isLoading) {
    return null;
  }
  return (
    <SearchResultBox>
      {children}
      {!isIntersecting && (
        <MoreIndicator>
          <FiMoreHorizontal />
        </MoreIndicator>
      )}
    </SearchResultBox>
  );
}
