import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div>
                <Link to='/'>ReactRouter 실습</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/student/kdt'>학생KDT</Link> &nbsp;&nbsp;
                <Link to='/student/codingon'>코딩온</Link> &nbsp;&nbsp;
                <Link to='/student/new?name=kdt3rd'>searchParams</Link> &nbsp;&nbsp;
            </div>
        </div>
    );
}

