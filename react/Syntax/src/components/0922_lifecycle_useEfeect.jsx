import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber((prev) => prev + 1);
  };

  const changeVisibleState = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>ON/OFF</button>
      {visible && <MyComponent number={number} />}
    </div>
  );
}

function MyComponent({ number }) {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('항상 실행됩니다');
  });

  useEffect(() => {
    console.log('컴포넌트가 생성 될때 실행');
    // cleanup
    return () => {
      console.log('제거될 때 실행됩니다');
    };
  }, []);

  useEffect(() => {
    console.log('input 변경될 때 실행');
  }, [text]);

  // 최초에 무조건 한번씩은 다 실행됨 (cleanup함수 빼고)

  return (
    <div>
      <div>My Component {number}</div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  );
}

export function EffectPrac() {
  const [postList, setPostList] = useState([]);
  console.log(postList);
  const fakePost = [
    {
      title: 'sunt aut facdkls dkfja dkf slddfskjdasfjlsdf dfkjdfksldfk',
      content: 'akdfalsdjf dasfkjdkewodc, ddfdkfalsdk wlqodlkdf dfkdfjalekladf',
    },
    {
      title: 'qui est esse',
      content: 'dsfkdsafl dkflwkdf dfsak snidf nigi rekaldkfa dfaldsfkw',
    },
    {
      title: 'ea milestias quasi esxdfkwldkfa wwqldifal dfddfdf',
      content: 'sdldsadkdfkw dlkfdjsfdklsdfkjlw wkldfjslkfjs dfkjdkvjckjdf',
    },
    {
      title: 'eum et est occaecati',
      content: 'qqlqpplcleq eioqnv,emds, ddfdkfalsdk wlqodlkdf cimwivnsken',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setPostList(fakePost);
    }, 2000);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='title'> 📨 Post List </div>
        {postList.length === 0 ? (
          <h1>loading...</h1>
        ) : (
          postList.map((el, i) => {
            return (
              <div className='message-wrapper' key={i}>
                <div className='message-header'>
                  <span className='message-number'>No. {i + 1}</span>
                  <span className='message-title'> - {el.title}</span>
                </div>
                <div className='message-content'> {el.content} </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export function EffectPrac2() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // useEffect는 비동기함수를 직접적으로 지원하지 않음
    // 비동기함수를 사용하려면 내부에 비동기함수를 정의하고 바로 호출
    const fetchData = async () => {
      const res = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
      });
      // let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUserList(res.data);
      setIsLoading(true);
    };
    fetchData();
    return () => {
      console.log('연결해제 완료');
    };
  }, []);

  useEffect(() => {
    console.log(`유저정보 업데이트 ${userList.length}`);
  }, [userList]);

  const handleDelete = () => {
    setUserList([]);
  };
  return (
    <div>
      {isLoading ? (
        <ul>
          {userList.map((el, i) => {
            return (
              <li key={i}>
                {el.name} - {el.email}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Loading..</div>
      )}

      <button type='button' onClick={handleDelete}>
        {' '}
        삭제{' '}
      </button>
    </div>
  );
}
