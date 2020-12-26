import {createSelector} from 'reselect';

const counterSelector = createSelector(
    (state) => state.counterReducer,
    (items) => items,
);

export {counterSelector};
