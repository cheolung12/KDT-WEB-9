import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  console.log(todo);
  console.log(todoList);
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: todo,
      done: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodo('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      addTodo();
    }
  };

  const handleChecked = (id) => {
    if (todo.trim() !== '') {
      setTodoList(
        todoList.map((todo) => {
          return todo.id === id ? { ...todo, done: !todo.done } : todo;
        })
      );
    }
  };

  const handleDeleted = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Add your new Todo'
        value={todo}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button type='button' onClick={addTodo}>
        ADD
      </button>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              type='checkbox'
              id={todo.id}
              checked={todo.done}
              onChange={() => handleChecked(todo.id)}
            />
            <label htmlFor='todo'>{todo.title}</label>
            <button type='button' onClick={() => handleDeleted(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
