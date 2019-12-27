import { all } from 'redux-saga/effects';
import todosSaga from './todos';
import blogSaga from './blog';

export default function* rootSaga() {
    yield all([
        todosSaga(),
        blogSaga(),
    ]);
}