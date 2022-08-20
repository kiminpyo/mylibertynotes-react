import { ActionTypes } from "@mui/base";

export const initialState = {
    userInfo: null,
};

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SIGNUP = "SIGNUP";
export const LOAD_ME = "LOAD_ME";
export const LOAD_ME_SUCCESS = "LOAD_ME_SUCCESS";
export const LOG_OUT = "LOG_OUT";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                userInfo: action.data,
            };
        }
        case SIGNUP: {
            return {
                ...state,
                userInfo: action.data,
            };
        }
        case LOAD_ME: {
            return {
                ...state,
            };
        }
        case LOAD_ME_SUCCESS: {
            return {
                userInfo: action.data,
            };
        }
        case LOG_OUT: {
            return {
                userInfo: action.data,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
export default reducer;
