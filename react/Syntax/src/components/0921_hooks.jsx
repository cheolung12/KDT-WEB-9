import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function CounterFunc() {
  const [number, setNumber] = useState(0);
  const handleIncrement = () => {
    // setNumber(number+1)
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setNumber((prev) => prev - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
}

export function TextFunc() {
  const [color, setColor] = useState('black');
  const [text, setText] = useState('검정색');
  const handleColor = (color, text) => {
    setColor(color);
    setText(text);
  };

  return (
    <div>
      <h1 style={{ color }}>{text} 글씨</h1>
      <button onClick={() => handleColor('red', '빨간색')}>빨간색</button>
      <button onClick={() => handleColor('blue', '파란색')}>파란색</button>
    </div>
  );
}

export function ToggleFunc() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>{toggle ? '사라져라' : '보여라'}</button>
      <h1>{toggle && '안녕하세요'}</h1>
    </div>
  );
}

export function BoardFunc() {
  const [insert, setInsert] = useState({ writer: '', title: '' });
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState({ type: 'writer', content: '' });
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsert({ ...insert, [name]: value });
  };
  const handleInsert = () => {
    setComments([...comments, insert]);
    setInsert({ writer: '', title: '' });
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const searchComment = () => {
    const { type, content } = search;
    setFiltered(
      comments.filter((el) => {
        if (el[type].includes(content)) return true;
        else return false;
      })
    );
  };

  return (
    <>
      <form>
        <label htmlFor='writer'>작성자: </label>
        <input
          id='writer'
          name='writer'
          type='text'
          value={insert.writer}
          onChange={handleChange}
        />
        <label htmlFor='title'>제목: </label>
        <input
          id='title'
          name='title'
          type='text'
          value={insert.title}
          onChange={handleChange}
        />
        <button type='button' onClick={handleInsert}>
          작성
        </button>
      </form>
      <br />

      <form>
        <select name='type' value={search.type} onChange={handleSelect}>
          <option value='writer'>작성자</option>
          <option value='title'>제목</option>
        </select>
        <input
          type='text'
          name='content'
          placeholder='검색어'
          value={search.content}
          onChange={handleSelect}
        />
        <button type='button' onClick={searchComment}>
          검색
        </button>
      </form>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0
            ? comments.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.writer}</td>
                  </tr>
                );
              })
            : filtered.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.writer}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
}

export function Todo() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addTodo = () => {
    if (todoList.length > 10) {
      alert('할 일 이 너무 많아요!');
    }
    if (todo !== '') {
      const newTodo = {
        id: uuidv4(),
        text: todo,
        checked: false,
      };
      setTodoList([...todoList, newTodo]);
      setTodo('');
    }
  };
  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((el) => {
        return el.id === id ? { ...el, checked: !el.checked } : el;
      })
    );
  };
  const deleteTodo = () => {
    const result = todoList.filter((el) => {
      return !el.checked;
    });
    setTodoList(result);
  }

  return (
    <>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='할 일 입력...'
      />
      <button type='button' onClick={addTodo}>
        추가
      </button>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={el.id}>
              <input
                type='checkbox'
                checked={el.checked}
                onChange={() => toggleTodo(el.id)}
              />
              {el.text}
            </li>
          );
        })}
      </ul>
      <button onClick={deleteTodo}>완료된 할 일 삭제</button>
    </>
  );
}

//////////////////////////////////////////////////////////////////////////
// 잘못된 코드
export function Todo2() {
  const [todo, setTodo] = useState({
    id: uuidv4(),
    content: '',
    checked: false,
  });
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleChecked = (e) => {
    console.log(e.target.checked);
    console.log(e.target.id);
    todoList.map((el) => {
      if (el.id === e.target.id) {
        el.checked = e.target.checked;
      }
      return el;
    });
  };

  const addTodo = () => {
    if (todoList.length >= 10) {
      alert('할일이 너무 많아요!');
      return;
    }
    setTodoList([...todoList, todo]);
    setTodo({ id: uuidv4(), content: '', checked: false });
  };

  const handleDeleted = () => {
    console.log('delete!');
    const newTodo = todoList.filter((el) => {
      return el.checked === false;
    });

    setTodoList(newTodo);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='할 일 입력..'
        name='content'
        value={todo.content}
        onChange={handleChange}
      />
      <button type='button' onClick={addTodo}>
        추가
      </button>
      <ul>
        {todoList.map((el) => {
          return (
            <li key={uuidv4()}>
              <input
                id={el.id}
                type='checkbox'
                name='checked'
                value={el.checked}
                onChange={handleChecked}
              />
              {el.content}
            </li>
          );
        })}
      </ul>
      <br />
      <button type='button' onClick={handleDeleted}>
        완료된 할 일 삭제
      </button>
    </div>
  );
}
