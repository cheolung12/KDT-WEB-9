import React from 'react';

export default function Prac1() {
  let name = '뀡뀡이';
  let animal = '고양이';
  const style = {
    textDecoration: 'underline',
  };
  const title = 'Title';
  return (
    <>
      <div>
        이것은 div입니다
        <h3>이것은 div안에 있는 h3태그입니다</h3>
      </div>
      <div>{3 + 5 === 8 ? <div>정답입니다!</div> : <div>오답입니다!</div>}</div>
      <br />

      <h2>
        제 반려동물의 이름은 <span style={style}>{name}</span>입니다. <br />{' '}
        <span style={style}>{name}</span>은 <span style={style}>{animal}</span>
        입니다.
      </h2>
      <br />

      <div className='wrapper'>
        <div className='test'>{title}</div>
        <div className='input-wrapper'>
          <label>아이디: </label>
          <input />
          <br />
          <label>비밀번호: </label>
          <input />
        </div>
      </div>
      <br />

      <div className='rainbow-wrapper'>
        <div className='red'></div>
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='navy'></div>
        <div className='purple'></div>
      </div>
    </>
  );
}
