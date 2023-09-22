import React from 'react';
import styled from 'styled-components';

export default function Styledcomponent() {
  return (
    <div>
      <Button>Button</Button>
      <PropButton active={true}>Prop Button</PropButton>
      <NewButton color="blue">New Button</NewButton>
    </div>
  );
}

const Button = styled.button`
  background-color: red;
  color: white;
`;

const PropButton = styled.button`
  background-color: ${( {active} ) => {
    if (active) {
        return "pink";
    }
    return '#eee';
  }};
    color: white;
`;

const NewButton = styled.button`
  // NewButton 컴포넌트에 color가는 props가 있으면 그 값 사용, 없으면 'red' 사용
  color: ${props => props.color || "red"};
`;
