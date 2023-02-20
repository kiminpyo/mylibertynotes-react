import produce from "../utils/produce";

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
    return produce(state, (draft) => {
        switch (action.type) {
            case LOGIN_SUCCESS:
                draft.userInfo = action.data;
                break;
            case SIGNUP:
                draft.userInfo = action.data;
                break;
            case LOAD_ME: {
                break;
            }
            case LOAD_ME_SUCCESS:
                draft.userInfo = action.data;
                break;
            case LOG_OUT:
                draft.userInfo = action.data;
                break;
            default: {
                break;
            }
        }
    });
};
export default reducer;
