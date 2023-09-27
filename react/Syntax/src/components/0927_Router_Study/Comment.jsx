import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Comment() {
    const ctx = useOutletContext();
    return (
        <div>
            {ctx.comment.map((el, i) => {
                return <div key={i}>{el.text}</div>
            })}
        </div>
    );
}

