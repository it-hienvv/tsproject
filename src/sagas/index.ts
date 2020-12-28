import {SagaIterator} from 'redux-saga';
import {all, fork} from 'redux-saga/effects';
import * as toDoListSagas from './toDo';

export default function* rootSaga(): SagaIterator<void> {
    yield all([...Object.values(toDoListSagas)].map(fork));
}
