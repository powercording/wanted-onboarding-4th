import React, { useState } from 'react';

import { FaSpinner } from 'react-icons/fa';

import useFocus from '../../hooks/useFocus.tsx';
import useTodo from '../../hooks/useTodo.tsx';
import useObserver from '../../hooks/useObserver.tsx';

import { SetTodos } from './TodoInterface.tsx';
// import { testSearchList } from '../../api/search.tsx';

import * as S from './styledTodo.ts';

function InputTodo({ setTodos }: { setTodos: SetTodos }) {
  const [inputText, setInputText] = useState('');
  const { addTodo, isLoading } = useTodo(setTodos);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { index, observer, isIntersecting } = useObserver();
  const { ref } = useFocus();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addTodo({ todoTitle: inputText });
    setInputText('');
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // const handleTest = () => {
  //   const result = testSearchList(index);
  //   console.log(result);
  // };

  return (
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
      {/* <button type="button" onClick={handleTest}>
        가져오기
      </button> */}
    </S.Form>
  );
}

export default InputTodo;
