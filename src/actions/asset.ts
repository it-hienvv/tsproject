import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
    lang: string;
    themes: string;
    user?: User;
};

type User = {
    name: string;
    age: number;
};
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
