import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./post";
import userSaga from "./user";
// axios.defaults.baseURL = "http://api.mylibertynotes.site";
// axios.defaults.baseURL = "http://54.164.14.94:80/";
axios.defaults.baseURL = "http://localhost:80/";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(postSaga)]);
    yield all([fork(userSaga)]);
}
