import React, { useRef } from 'react';

// 콜백함수
export class RefClassCallback extends React.Component {
  handleFocus = () => {
    this.myInput.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        {/* 만들어진 변수 myInput 해당 요소의 ref prop로 넣어주면 ref 설정 완료 */}
        {/* id 대신 사용하는 느낌 */}
        {/* ref 이름이 겹쳐도 컴포넌트 내부에서만 사용하기 때문에 ㄱㅊ */}
        <input
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

// 내장함수 (더 복잡하니까 콜백함수 쓰셈)
export class RefClassCreate extends React.Component {
  // createRef를 사용해 만들 때는 컴포넌트 내부에서 변수에 React.createRef()를 담아주어야 함
  myInput = React.createRef();
  handleFocus = () => {
    // ref를 설정한 돔에 접근하기 위해서는 current 이용
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export function RefFuncDom() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
      <input ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </>
  );
}

export function RefFuncLocal() {
  // 컴포넌트가 리렌더링 되어도 값은 유지
  const idRef = useRef(1);

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };

  return (
    <>
      <h1>Ref Sample</h1>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>PLUS Ref</button>
    </>
  );
}