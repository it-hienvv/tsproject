import {SagaIterator} from 'redux-saga';
import {all, takeLatest} from 'redux-saga/effects';

function* requestCheckToDoList(action: string): SagaIterator<void> {
    console.log('action', action);
}

function* fetchWatcher(): SagaIterator<void> {
    yield all([takeLatest('ACTION_ANY', requestCheckToDoList)]);
}

export default fetchWatcher;
