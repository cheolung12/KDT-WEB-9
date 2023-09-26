import React, { useState } from 'react';
import styled from 'styled-components';

export function Practice() {
  const [toggle, setToggle] = useState(true);
  const changeColor = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <Button onClick={changeColor} toggle={toggle}>
        색상변경!
      </Button>
    </div>
  );
}

const Button = styled.button`
  background-color: ${({ toggle }) => (toggle ? 'red' : 'blue')};
  color: ${({ toggle }) => (toggle ? 'black' : 'white')};
`;

export function Practice2() {
  const [state, setState] = useState({ todo: '', todoList: [] });
  const AddTodo = () => {
    setState({ todo: '', todoList: [...state.todoList, state.todo] });
  };
  console.log(state);
  return (
    <>
      <input
        value={state.todo}
        onChange={(e) => setState({ ...state, todo: e.target.value })}
      />
      <AddButton onClick={AddTodo}>Add</AddButton>
      <br />
      <TodoList>
      {state.todoList.map((el, i) => {
        return <div key={i}>
          <div>{el}</div>
          <hr />
        </div>;
      })}
      </TodoList>
    </>
  );
}

const AddButton = styled.button`
  background-color: skyblue;
  font-weight: bold;
`;
const TodoList = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;
