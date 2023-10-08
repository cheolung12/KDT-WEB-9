import { createSlice } from '@reduxjs/toolkit';

const initCount = {
  counter: 10,
};

// createSlice(): 리듀서와 액션을 함께 생성하는 함수
const counterSlice = createSlice({
  name: 'counter',
  initialState: initCount,
  reducers: {
    increment(state) {
      // state지만 수정하듯이 변경 가능
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    calc(state, action) {
      console.log(action);
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
