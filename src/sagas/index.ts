import {all, fork} from 'redux-saga/effects';
import * as toDoListSagas from './toDo';

export default function* rootSaga() {
    yield all([...Object.values(toDoListSagas)].map(fork));
}
