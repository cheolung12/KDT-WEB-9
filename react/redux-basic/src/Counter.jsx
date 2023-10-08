import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from './store/counter';

export default function Counter() {
    const number = useSelector((state) => state.counter.counter);
    console.log(number);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(counterAction.increment());
    }
    const minus = () => {
        dispatch(counterAction.decrement());
    }
    const calc = () => {
        dispatch(counterAction.calc({a: 1, b: 3}));
        // 예제 만들어 보기
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={add}>ADD</button>
            <button onClick={minus}>MINUS</button>
            <button onClick={calc}>cal</button>
        </div>
    );
}

