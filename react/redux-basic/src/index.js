import { createStore } from 'redux';

const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const todoReducer = (state = [], action) => {
    console.log(action.type);
    switch(action.type){
        case ADD_TODO:
            const newTodo = { text: action.text, id: Date.now() };
            return [ newTodo, ...state ];
        case DELETE_TODO:
            return state.filter(el => el.id !== action.id);
        default:
            return;
    }
}

const store = createStore(todoReducer);

const removeTodo = (id) => {
    store.dispatch({type: DELETE_TODO, id});
}

store.subscribe(() => {
    console.log(store.getState());
    const todos = store.getState();
    ul.innerHTML = '';
    todos.map(value => {
        const li = document.createElement('li');
        const btn  = document.createElement('button');
        btn.addEventListener('click', () => removeTodo(value.id));
        btn.innerText = '삭제';
        li.id = value.id;
        li.innerText = value.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });

});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    store.dispatch({type: ADD_TODO, text: input.value});
    input.value = '';
});


// addButton.addEventListener('click', () => {
//   todoStore.dispatch({ type: 'ADD_TODO' });
// });

// // 바닐라 js를 이용한 숫자증가, 감소 코드
// const add = document.getElementById('add');
// const minus = document.getElementById('minus');
// const num = document.getElementById('num');

// let count = 0;

// add.addEventListener("click", () => {
//   count += 1;
//   num.textContent = count;
// });

// minus.addEventListener("click", () => {
//   count -= 1;
//   num.textContent = count;
// });

// ///////////////////////////////
// Redux를 이용한 숫자증가, 감소 코드

// Reducer
// const countReducer = (state = 0, action) => {
//   switch(action.type){
//     case 'ADD':
//       return state += 1;
//     case 'MINUS':
//       return state -= 1;
//     default:
//       // throw new Error('unknown type');
//       return state;
//   }
// }

// // store: 데이터를 넣는곳
// // createStore: store 생성, 파라미터로 리듀서 함수 필수 (없으면 오류남)
// const countStore = createStore(countReducer);
// const ADD = 'ADD';
// const MINUS = 'MINUS'
// // subscribe()는 데이터와 저장소가 변경될 때마다 함수를 실행
// countStore.subscribe(() => {
//   // getState()는 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
//   num.textContent = countStore.getState();
// });

// add.addEventListener("click", () => {
//   countStore.dispatch({type: ADD});
// });

// minus.addEventListener("click", () => {
//   countStore.dispatch({type: MINUS});
// });
