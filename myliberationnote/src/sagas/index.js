import { all, fork } from "redux-saga/effects";
import axios from "axios";
import postSaga from "./post";

axios.defaults.baseURL = "http://localhost:80/";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(postSaga)]);
}
