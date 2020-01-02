import { takeEvery, call, select } from 'redux-saga/effects';
import {
    JOKE_GET,
    JOKE_GET_SUCCESS,
    JOKE_GET_FAILED,
} from '../../reducers/joke';
import { getAllJokes } from '../../apis/joke';

function* handleGetJoke(action) {
    const  { res, error } = yield call(getAllJokes);
    console.log(res);
}

export default function* jokeRootSaga() {
    yield takeEvery(JOKE_GET, handleGetJoke);
}
