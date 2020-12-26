import {combineReducers} from 'redux';
import {reducer as counterReducer} from './counter';
import {reducer as assetReducer} from './asset';

const rootReducers = combineReducers({
    counterReducer,
    assetReducer,
});
export default rootReducers;
export type RootReducerType = ReturnType<typeof rootReducers>;
