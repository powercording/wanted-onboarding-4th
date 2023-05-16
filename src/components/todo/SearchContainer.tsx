/* eslint-disable object-curly-newline */
import React, { ReactNode } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { SearchResultBox, Indicator } from './styledTodo.ts';

interface ResultBox {
  searchResult: string[];
  isLoading: boolean;
  isIntersecting: boolean;
  children: ReactNode;
}
export default function SearchContainer(props: ResultBox) {
  const { searchResult, isLoading, isIntersecting, children } = props;

  if (!searchResult.length) {
    return null;
  }

  return (
    <SearchResultBox>
      {children}
      {!isIntersecting && <Indicator>{isLoading ? 'dd' : <FiMoreHorizontal />}</Indicator>}
    </SearchResultBox>
  );
}
