export const initialState = {
    posts: [],
    post: {},
    user: "a",
    mypost: null,
};

export const ADD_POST = "ADD_POST";
export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POST_DETAIL = "LOAD_POST_DETAIL";
export const LOAD_POST_DETAIL_SUCCESS = "LOAD_POST_DETAIL_SUCCESS";
export const LOAD_MY_CONTENT = "LOAD_MY_CONTENT";
export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const addPost = (data) => {
    console.log(data);
    return {
        type: ADD_POST,
        data,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, action.data],
            };
        }
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                posts: action.data,
            };
        }
        case LOAD_POST_DETAIL_SUCCESS: {
            return {
                ...state,
                post: action.data,
                user: Object.values(action.data.User),
            };
        }
        case LOAD_MY_CONTENT: {
            return {
                ...state,
                mypost: action.data,
            };
        }
        case EDIT_POST_SUCCESS: {
            return {
                ...state,
            };
        }
        case DELETE_POST_SUCCESS:
            {
            }
            return {
                ...state,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
