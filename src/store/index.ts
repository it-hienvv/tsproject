import {applyMiddleware, createStore} from 'redux';
import rootReducer from 'actions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

export type SagaType = ReturnType<typeof createSagaMiddleware>;

function configureStore(sagaMiddleware: SagaType) {
    const middlewares = [sagaMiddleware];
    if (__DEV__) {
        const createDebugger = require('redux-flipper').default;
        middlewares.push(createDebugger());
    }
    const configureStore = createStore(
        rootReducer,
        applyMiddleware(...middlewares),
    );
    return configureStore;
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(sagaMiddleware);
sagaMiddleware.run(rootSaga);

export {store};
