import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoList({ todoList, handleChecked, editTodoId, handleEditChange, handleLabelDoubleClick, handleLabelKeyPress, handleDeleted, setEditTodoId }) {
  return (
    <div>
      {todoList.map((todo) => (
        <div key={todo.id} className='box-border w-full px-8 flex justify-between items-center h-12'>
          <div>
            <input
              type='checkbox'
              id={todo.id}
              checked={todo.done}
              onChange={(e) => handleChecked(e, todo.id)}
              className='mr-3 w-4 h-4'
            />
            {editTodoId === todo.id ? (
              <input
                type='text'
                value={todo.title}
                onChange={(e) => handleEditChange(e, todo.id)}
                onBlur={() => setEditTodoId(null)}
                onKeyDown={(e) => handleLabelKeyPress(e, todo.id)}
                className='text-lg'
              />
            ) : (
              <label
                htmlFor={todo.id}
                onDoubleClick={() => handleLabelDoubleClick(todo.id)}
                className='text-lg'
              >
                {todo.title}
              </label>
            )}
          </div>
          <button type='button' onClick={() => handleDeleted(todo.id)}>
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
}