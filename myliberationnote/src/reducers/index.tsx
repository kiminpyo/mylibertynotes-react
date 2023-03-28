import { combineReducers } from "redux";

import post from "./post";
import user from "./user";
import news from "./news";

const rootReducer = combineReducers({
    post,
    user,
    news,
});

export default rootReducer;
