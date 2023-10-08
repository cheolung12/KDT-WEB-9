import { createStore } from 'redux';

export const  ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// reducer
const reducer = (state = [], action) => {
    console.log(action.type);
    switch(action.type){
        case ADD_TODO:
            const newTodo = { text: action.text, id: Date.now() };
            return [ newTodo, ...state ];
        case DELETE_TODO:
            return state.filter(el => el.id !== action.id);
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;