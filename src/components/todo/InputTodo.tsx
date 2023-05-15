import React, { useState } from 'react';

import { FaSpinner } from 'react-icons/fa';

import useFocus from '../../hooks/useFocus.tsx';
import useTodo from '../../hooks/useTodo.tsx';
import useObserver from '../../hooks/useObserver.tsx';

import { SetTodos } from './TodoInterface.tsx';
import { testSearchList } from '../../api/search.tsx';

import TodoSearchResultContainer from './TodoSearchRsultContainer.tsx';
import * as S from './styledTodo.ts';
import debounce from '../../util/dounce.tsx';

function InputTodo({ setTodos }: { setTodos: SetTodos }) {
  const [inputText, setInputText] = useState('');
  const [searcResult, setSearcResult] = useState<any>([]);
  const bounce = debounce();

  const { addTodo, isLoading } = useTodo(setTodos);
  const { index, observer, isIntersecting } = useObserver();
  const { ref } = useFocus();

  function handleTest() {
    const { result } = testSearchList(index);
    setSearcResult((prev: any) => [...prev, ...result]);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addTodo({ todoTitle: inputText });
    setInputText('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    bounce(window.alert, e.target.value);
  };

  return (
    <S.Container>
      <button type="button" onClick={handleTest}>
        가져오기
      </button>
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
        <S.Spinner />
        {!isLoading ? null : <FaSpinner className="spinner" />}
      </S.Form>
      <TodoSearchResultContainer isLoading={false} isIntersecting={isIntersecting}>
        {searcResult?.map((text: string, idx: number) => {
          if (idx === searcResult.length - 1) {
            return (
              <h2 key={text} ref={observer}>
                {text}
              </h2>
            );
          }
          return <h2 key={text}>{text}</h2>;
        })}
      </TodoSearchResultContainer>
    </S.Container>
  );
}

export default InputTodo;
