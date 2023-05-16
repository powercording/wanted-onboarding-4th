/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';

import useFocus from '../../hooks/useFocus.tsx';
import useTodoApi from '../../hooks/useTodoApi.tsx';
import useObserver, { INITIALINDEX } from '../../hooks/useObserver.tsx';

import { SetTodos } from './TodoInterface.tsx';

import SearchContainer from './SearchContainer.tsx';
import * as S from './styledTodo.ts';
import debounce from '../../util/dounce.tsx';
import useSearchResult, { INITIAL_STATE } from '../../hooks/useSearchResult.tsx';

function InputTodo({ setTodos }: { setTodos: SetTodos }) {
  const [inputText, setInputText] = useState('');
  const [shouldStop, setShouldStop] = useState(false);

  const { getSearch, setSearchResult, searchLoading, result, total } = useSearchResult();
  const { addTodo, isLoading } = useTodoApi(setTodos);
  const { index, setIndex, isIntersecting, observer } = useObserver(shouldStop);
  const { ref } = useFocus();
  const dbounce = debounce();

  const handleSearch = async (query: string = inputText) => {
    if (result?.length && result.length >= total) setShouldStop(true);
    await getSearch(query, index);
  };

  useEffect(() => {
    handleSearch(inputText);
  }, [index]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addTodo({ todoTitle: inputText });
    setInputText('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIndex(INITIALINDEX);
    setSearchResult(INITIAL_STATE);
    dbounce(handleSearch, e.target.value);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          className="input-text"
          placeholder="Add new todo..."
          ref={ref}
          value={inputText}
          onChange={handleOnChange}
          disabled={isLoading}
        />
        <S.SearchIconContainer>
          <S.SearchIcon />
        </S.SearchIconContainer>
        {isLoading || searchLoading ? <S.Spinner /> : null}
      </S.Form>
      <SearchContainer
        searchResult={result}
        isLoading={searchLoading}
        isIntersecting={isIntersecting}
      >
        {result?.map((text: string, idx: number) => {
          if (idx === result.length - 1) {
            return (
              <h2 key={text} ref={observer}>
                {text}
              </h2>
            );
          }
          return <h2 key={text}>{text}</h2>;
        })}
      </SearchContainer>
    </S.Container>
  );
}

export default InputTodo;
