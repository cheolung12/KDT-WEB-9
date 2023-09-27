import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const users = [
  {
    id: 1,
    name: '홍길동',
    comment: [
      {
        text: '안녕하세요',
      },
    ],
  },
  {
    id: 2,
    name: 'ㅂㅂㅂ',
    comment: [
      {
        text: '반갑습니다',
      },
      {
        text: '어서오세요',
      },
    ],
  },
  {
    id: 3,
    name: 'aaa',
    comment: [
      {
        text: 'hello',
      },
    ],
  },
];

export default function User() {
  // searchParams는 쿼리스트링 값을 가져오는 것
  // setSearchParams는 쿼리스트링 값을 할당하는 것
  // ex) 검색어 같은거 받아올때 사용
  const [ searchParams, setSearchParams ] = useSearchParams();
  console.log(searchParams.get('mode'));
  return (
    <div>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              <Link to={`/user/${value.id}`}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
