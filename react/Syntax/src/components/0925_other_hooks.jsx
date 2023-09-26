import React, { useState, useMemo, useCallback, useReducer } from 'react';

export function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  console.log('render');
  // useMemo: 연산이 엄청 많을때 사용
  // count가 변경될때만 실행
  // inputValue가 변경되어도 컴포넌트는 리렌더링 되지만, calc는 다시 계산되지 않는다.
  const calc = useMemo(() => {
    console.log('excute!');
    for (let i = 0; i < 10000; i++) {
      i = i * 2;
    }
    return count * 2;
  }, [count]);

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>PLUS</button>
      <p>count: {count}</p>
      <p>calc: {calc}</p>
    </div>
  );
}

// useEffect의 경우 mount, update, umnount등 렌더링 된 이후 실행
// useMemo의 경우 제공된 함수의 반환값을 기억하여 의존성 배열의 값이 (여기선 count)변경될 때만 해당 함수를 재실행  렌더링 전에 실행
// 값이 동일한 경우 다시 함수를 호출해 값을 구하는 대신 메모이제이션된 값을 반환하여 그대로 사용하기 때문에 리렌더링 되지 않는다.

export function UseCallback() {
  const [count, setCount] = useState(0);
  // useCallback 미사용
  const handleCount = () => {
    setCount((prev) => prev + 1);
    console.log('handleCount', count);
  };
  // useCallback 사용
  const handleCountCallback = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log('handleCountCallback', count);
  }, []);
// 렌더링은 되는데 렌더링 될때 함수가 다시 호출되지 않아서 console에 있는 카운트 값이 변하지 않음

  return (
    <>
			<button onClick={handleCount}>PLUS1</button>
      <button onClick={handleCountCallback}>PLUS2</button>
      <p>{count}</p>
    </>
  );
}

////////////////// Reducer
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error(`알 수 없는 액션 타입: ${action.type}`);
  }
}

export function ReducerPrac() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'ERROR' });
        }}
      >
        ERROR
      </button>
    </div>
  );
}
