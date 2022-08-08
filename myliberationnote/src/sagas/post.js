import {
    all,
    fork,
    take,
    call,
    put,
    takeEvery,
    takeLatest,
    delay,
} from "redux-saga/effects";
import axios from "axios";
import { ADD_POST, LOAD_POSTS, LOAD_POSTS_SUCCESS } from "../reducers/post";

function addPostAPI(data) {
    /* req.body.content를 만든다 */
    return axios.post("http://localhost:80/post", data);
}

function* addPost(action) {
    console.log(action);
    try {
        const result = yield call(addPostAPI, action.data);
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

function loadPostsAPI() {
    /* req.body.content를 만든다 */
    return axios.get("http://localhost:80/post");
}

function* loadPosts(action) {
    console.log(action);
    try {
        const result = yield call(loadPostsAPI, action.data);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
    }
}

function* watchAddpost() {
    yield takeLatest(ADD_POST, addPost);
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_POSTS, loadPosts);
}

export default function* postSaga() {
    yield all([fork(watchAddpost)]);
    yield all([fork(watchLoadPosts)]);
}
