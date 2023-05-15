import React, { useState } from 'react';
import { FaPlusCircle, FaSpinner } from 'react-icons/fa';

import useFocus from '../../hooks/useFocus.tsx';
import useTodo from '../../hooks/useTodo.tsx';

import { SetTodos } from './TodoInterface.tsx';

function InputTodo({ setTodos }: { setTodos: SetTodos }) {
  const [inputText, setInputText] = useState('');
  const { isLoading, addTodo } = useTodo(setTodos);
  const { ref } = useFocus();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addTodo({ todoTitle: inputText });
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setInputText('');
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={handleOnChange}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
}

export default InputTodo;
