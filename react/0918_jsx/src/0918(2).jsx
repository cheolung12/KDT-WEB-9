import React from 'react';

export default function Prac2() {
    const lists = ['k', 'd', 't', 'w', 'e', 'b'];
    // 단축 평가
    // && 연산자
    const result = false && "Hello";
    console.log(result);

    // || 연산자
    const defaultValue = 1000;
    const price = 1500;
    return (
        <div>
            {lists.map((el, i) => <div key={i}>Hello {el} </div>)}
        </div>
    );
}

