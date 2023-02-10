import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
    LOAD_ME,
    LOAD_ME_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOG_OUT,
    SIGNUP,
} from "../reducers/user";
function userLoginAPI(data) {
    return axios.post("/user/login", data);
}
function* userLogin(action) {
    try {
        const result = yield call(userLoginAPI, action.data);
        yield put({
            type: LOGIN_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
    }
}

function userSignupAPI(data) {
    return axios.post("/user/signup", data);
}
function* userSignup(action) {
    try {
        const result = yield call(userSignupAPI, action.data);
    } catch (error) {
        console.error(error);
    }
}

function userLoadMeAPI() {
    return axios.get("/user");
}
function* userLoadMe(action) {
    try {
        const result = yield call(userLoadMeAPI, action.data);

        yield put({
            type: LOAD_ME_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
    }
}

function userLogoutAPI() {
    return axios.post("/user/logout");
}
function* userLogout(action) {
    try {
        const result = yield call(userLogoutAPI, action.data);
    } catch (err) {
        console.error(err);
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN, userLogin);
}
function* watchSignup() {
    yield takeLatest(SIGNUP, userSignup);
}
function* watchLoadMe() {
    yield takeLatest(LOAD_ME, userLoadMe);
}
function* watchLogout() {
    yield takeLatest(LOG_OUT, userLogout);
}

export default function* userSaga() {
    yield all([fork(watchLogin)]);
    yield all([fork(watchSignup)]);
    yield all([fork(watchLoadMe)]);
    yield all([fork(watchLogout)]);
}
