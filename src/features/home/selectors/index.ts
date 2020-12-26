import {RootReducerType} from 'actions';
import {createSelector} from 'reselect';

const counterSelector = createSelector(
    (state: RootReducerType) => state.counterReducer,
    (items) => items,
);

export {counterSelector};
