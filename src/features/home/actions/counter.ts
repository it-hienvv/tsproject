import {createSlice, PayloadAction, CaseReducer} from '@reduxjs/toolkit';

const increment: CaseReducer<number, PayloadAction<number>> = (state, action) =>
    state + action.payload;
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment,
        decrement: (state) => state - 1,
    },
});

const {actions, reducer} = counterSlice;
export {actions, reducer};
