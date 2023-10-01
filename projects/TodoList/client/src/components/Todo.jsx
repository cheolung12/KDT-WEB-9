import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function Todo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get('http://localhost:8000/todo');
        setTodoList(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodo();
  }, []);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = async () => {
    if (todo.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        title: todo,
        done: false,
      };

      try {
        await axios({
          method: 'POST',
          url: 'http://localhost:8000/todo',
          data: newTodo,
        });
      } catch (error) {
        console.error(error);
      }

      setTodoList([...todoList, newTodo]);
    }
    setTodo('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      addTodo();
    }
  };

  const handleChecked = async (e, id) => {
    try {
      await axios({
        method: 'PATCH',
        url: 'http://localhost:8000/todo/status',
        data: {
          id,
          done: e.target.checked,
        },
      });
    } catch (error) {
      console.error(error);
    }
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  const handleDeleted = async (id) => {
    try {
      await axios({
        method: 'DELETE',
        url: `http://localhost:8000/todo/${id}`,
      });
    } catch (error) {
      console.error(error);
    }
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleLabelDoubleClick = (id) => {
    setEditTodoId(id);
  };

  const handleEditChange = (e, id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleLabelKeyPress = async (e, id) => {
    if (e.key === 'Enter') {
      try {
        await axios({
          method: 'PATCH',
          url: `http://localhost:8000/todo/${id}`,
          data: {
            title: e.target.value,
          },
        });
      } catch (error) {
        console.error(error);
      }
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, title: e.target.value } : todo
        )
      );
      setEditTodoId(null);
    }
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
              onChange={(e) => handleChecked(e, todo.id)}
            />
            {editTodoId === todo.id ? (
              <input
                type='text'
                value={todo.title}
                onChange={(e) => handleEditChange(e, todo.id)}
                onBlur={() => setEditTodoId(null)}
                onKeyDown={(e) => handleLabelKeyPress(e, todo.id)}
              />
            ) : (
              <label
                htmlFor={todo.id}
                onDoubleClick={() => handleLabelDoubleClick(todo.id)}
              >
                {todo.title}
              </label>
            )}
            <button type='button' onClick={() => handleDeleted(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
