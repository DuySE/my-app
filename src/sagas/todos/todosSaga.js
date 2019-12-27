import { takeEvery, select } from 'redux-saga/effects'; 
import { TODO_HANDLESUBMIT, selectors as TodoSelector } from '../../reducers/todo';

function* handleTodoSubmit(action) {
    const text = yield select(TodoSelector.getText);
    console.log(`${new Date()} ${action.type} - ${text}`);
}

export default function* todoRootSaga() {
    yield takeEvery(TODO_HANDLESUBMIT, handleTodoSubmit);
}
