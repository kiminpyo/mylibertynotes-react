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
import {
    ADD_POST,
    ADD_POST_SUCCESS,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    EDIT_POST,
    EDIT_POST_SUCCESS,
    LOAD_MY_CONTENT,
    LOAD_POSTS,
    LOAD_POSTS_SUCCESS,
    LOAD_POST_DETAIL,
    LOAD_POST_DETAIL_FAILURE,
    LOAD_POST_DETAIL_SUCCESS,
} from "../reducers/post";

function addPostAPI(data) {
    /* req.body.content를 만든다 */
    return axios.post("/post", data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);

        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
    }
}

function loadPostsAPI(lastId) {
    console.log(lastId);
    return axios.get(`/post?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.data, action.lastId);

        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
    }
}

function loadPostDetailAPI(id) {
    return axios.get(`/post/${id}`);
}

function* loadPostDetail(action) {
    try {
        const result = yield call(loadPostDetailAPI, action.data);

        yield put({
            type: LOAD_POST_DETAIL_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err.response);
        yield put({
            type: LOAD_POST_DETAIL_FAILURE,
            data: err.response,
        });
    }
}

function editPostAPI(data) {
    return axios.patch(`/post/${data.id}`, data);
}

function* editPost(action) {
    try {
        const result = yield call(editPostAPI, action.data);
        console.log(result.data);
        yield put({
            type: EDIT_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {}
}

function deletePostAPI(data) {
    return axios.delete(`/post/${data}`);
}

function* deletePost(action) {
    try {
        const result = yield call(deletePostAPI, action.data);

        yield put({
            type: DELETE_POST_SUCCESS,
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

function* watchLoadPostDetail() {
    yield takeLatest(LOAD_POST_DETAIL, loadPostDetail);
}

function* watchEditPost() {
    yield takeLatest(EDIT_POST, editPost);
}

function* watchDeletePost() {
    yield takeLatest(DELETE_POST, deletePost);
}

export default function* postSaga() {
    yield all([fork(watchAddpost)]);
    yield all([fork(watchLoadPosts)]);
    yield all([fork(watchLoadPostDetail)]);
    yield all([fork(watchEditPost)]);
    yield all([fork(watchDeletePost)]);
}
