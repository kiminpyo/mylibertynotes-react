import produce from "../utils/produce";

export const initialState = {
    userInfo: null,
    loginLoading: false,
    loginSuccess: null,
    loginFailure: null,
    loadMeSuccess: false,
    loadMeFailure: false,
};
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILULRE = "LOGIN_FAILULRE";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const SIGNUP = "SIGNUP";
export const LOAD_ME = "LOAD_ME";
export const LOAD_ME_SUCCESS = "LOAD_ME_SUCCESS";
export const LOAD_ME_FAILURE = "LOAD_ME_FAILURE";
export const LOG_OUT = "LOG_OUT";

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOGIN:
                draft.loginLoading = true;
                draft.loginSuccess = false;
                draft.loginFailure = false;
                break;
            case LOGIN_SUCCESS:
                draft.userInfo = action.data;
                draft.loginSuccess = true;
                draft.loginFailure = false;
                break;
            case LOGIN_FAILULRE:
                draft.loginSuccess = false;
                draft.loginFailure = true;

                break;
            case SIGNUP:
                draft.userInfo = action.data;
                break;
            case LOAD_ME: {
                break;
            }
            case LOAD_ME_SUCCESS:
                draft.userInfo = action.data;
                draft.loadMeSuccess = true;
                break;
            case LOG_OUT:
                draft.userInfo = action.data;
                draft.loginSuccess = null;
                draft.loginFailure = null;
                draft.loadMeSuccess = false;
                break;
            default: {
                break;
            }
        }
    });
};
export default reducer;
