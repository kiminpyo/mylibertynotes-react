import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import rootSaga from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();

const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(applyMiddleware(sagaMiddleware))
        : composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.

export default store;
