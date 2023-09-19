import React from 'react';
// import gomseul from '../gomseul.jpeg';
import PropTypes from 'prop-types';

// class형 컴포넌트
// class형 컴포넌트명 extends Component{}
export class ClassComponent extends React.Component {
  // 클래스형 컴포넌트에서 render 함수는 필수
  render() {
    const name = '클래스 컴포넌트';
    const { age } = this.props;
    return (
      <>
        <h1>{name}</h1>
        <h1>{this.props.name}</h1>
        <h1>{age}</h1>
        <hr />
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: '임꺽정',
  age: 13,
};
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

// 함수형 컴포넌트
export function FunctionComponent({ myclass }) {
  const name = '함수형 컴포넌트';

  return (
    <>
      <h1> Hello {name}</h1>
      <h1>{myclass}</h1>
      <hr />
    </>
  );
}

// FunctionComponent.defaultProps = {
//     myClass: 'kdt'
// }
FunctionComponent.propTypes = {
  myClass: PropTypes.string,
};

// 이벤트
export const Event = () => {
  const handleClick = () => {
    alert('클릭했습니다');
  };
  const handleClick2 = (e, str) => {
    console.log(e);
    alert(str);
  };
  return (
    <>
      <button onClick={handleClick}>클릭</button> &nbsp;
      <button onClick={(e) => handleClick2(e, '스트링')}>클릭2</button>
    </>
  );
};

export class EventClass extends React.Component {
  constructor (props) {
    // super는 부모의 값을 사용하기 위하여 넣은 키워드
    super(props);
    // this 바인딩: 일반 함수일때만 사용
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('클래스형 컴포넌트');
  }

  // arrow function: this 바인딩이 필요하지 않음
  handleClick2 = () => {
    alert('클래스형 컴포넌트 2번');
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭 (Class)</button>
        <button onClick={this.handleClick2}>클릭 (Class2)</button>
      </>
    );
  }
}
