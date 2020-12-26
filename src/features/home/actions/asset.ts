import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {State, User} from '../types';
const initState: State = {
    themes: 'themese1',
    lang: 'ABC',
};
const assetSlice = createSlice({
    name: 'asset',
    initialState: initState,
    reducers: {
        setUser: (state: State, action: PayloadAction<User>) => {
            state.user = action.payload;
            return state;
        },
    },
});

const {actions, reducer} = assetSlice;
export {actions, reducer};
