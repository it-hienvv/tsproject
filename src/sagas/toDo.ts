import {all, takeLatest} from 'redux-saga/effects';

function* requestCheckToDoList(action) {
    console.log('action', action);
}

function* fetchWatcher() {
    yield all([takeLatest('ACTION_ANY', requestCheckToDoList)]);
}

export default fetchWatcher;
