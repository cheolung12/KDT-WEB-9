import React from 'react';
import styled from 'styled-components';

export default function Styledcomponent() {
  return (
    <div>
      <_Button onClick={() => alert('기본 태그 속성은 작동')}>Button</_Button>
      <_NewButton color='blue'>New Button</_NewButton>
      <_PropButton active={true}>Prop Button</_PropButton>
      <_ExtendsButton>Extends Button</_ExtendsButton>
      <_Button as='span'>span 태그로 변환</_Button>
      <br />
      <br />
      <_Input type="password"/>
      <br />
      <_Box><p>Hello World</p><_Input /></_Box>
    </div>
  );
}

const _Button = styled.button`
  background-color: red;
  color: white;
`;

// props를 활용한 스타일링
const _NewButton = styled.button`
  // NewButton 컴포넌트에 color가는 props가 있으면 그 값 사용, 없으면 'red' 사용
  color: ${(props) => props.color || 'red'};
  // 그냥 props만 사용하고 싶다면
  // props => props.color
`;

// props를 활용한 조건부 스타일링
const _PropButton = styled.button`
  background-color: ${({ active }) => {
    if (active) {
      return 'pink';
    }
    return '#eee';
  }};
  color: white;
`;

// 상속
const _ExtendsButton = styled(_Button)`
  border-radius: 50%;
`;

// 기존 태그를 이름만 바꿔서 사용 -> as사용

// html 태그에 attribute 넣는법
const _Input = styled.input.attrs({
  required: true,
  placeholder: '내용을 입력하세요',
})`
  border: 3px solid #000;
  // style ...
`;

// 중첩
const _Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: blueviolet;;
  line-height: 200px;
  text-align: center;
  // 다른 컴포넌트를 불러와서 사용
  ${_Input} {
    background-color: navy;
  }
  // box 안에 있는 p 태그 스타일
  p {
    color: white;
    font-weight: bold;
    // pseudo
    &:hover {
      font-size: 30px;
    }
  }
`


// 스타일드 컴포넌트에 입력하는건 props라 하셨잖아요 근데 위에 에이태그로 변환gn href속성 준것도 props로 되야 하는거 아닌가요?
// 그리고 버튼에 onClick옵션주고 콜백함수로 alert창 띄웟는데 이것도 작동된다.