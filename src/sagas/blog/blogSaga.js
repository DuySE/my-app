import { takeEvery, select } from 'redux-saga/effects';
import { BLOG_SUBMIT, BLOG_DELETE, selectors as BlogSelector} from '../../reducers/blog';

function* handleBlogSubmit(action) {
    const title = yield select(BlogSelector.getTitle);
    const content = yield select(BlogSelector.getContent);
    console.log(`${new Date()} ${action.type} - ${title} - ${content}`);
}

function* handleBlogDelete(action) {
    const title = yield select(BlogSelector.getTitle);
    const content = yield select(BlogSelector.getContent);
    console.log(`${new Date()} ${action.type} - ${title} - ${content}`);
}

export default function* blogRootSaga() {
    yield takeEvery(BLOG_SUBMIT, handleBlogSubmit);
    yield takeEvery(BLOG_DELETE, handleBlogDelete);
}
